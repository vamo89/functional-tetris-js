const tetris = require('./lib/tetris')

const ctx = document.getElementById('tetris-canvas').getContext('2d')
ctx.scale(20, 20)
ctx.font = '1px times'

const maxWidth = 12
const maxHeight = 20
const colors = tetris.colors()

let player = {
  matrix: tetris.clearMatrix(maxWidth, maxHeight),
  points: 0,
  piecePos: {x: 0, y: 5},
  piece: randomPiece()
}
const timeControl = {
  lastTime: 0,
  dropCounter: 0,
  dropInterval: 200
}
playerControl()
update()

function draw (ctx, matrix) {
  matrix.forEach((row, y) =>
    row.forEach((value, x) => {
      if (value) {
        ctx.fillStyle = colors[value]
        ctx.fillRect(x, y, 1, 1)
      }
    })
  )
}

function drawPoints (ctx, playerPoints) {
  ctx.fillStyle = 'black'
  ctx.fillText('Points: ' + playerPoints, 0, maxHeight)
}

function update (time = 0) {
  let gameContinue = true
  timeControl.dropCounter += time - timeControl.lastTime
  timeControl.lastTime = time
  if (timeControl.dropCounter > timeControl.dropInterval) {
    timeControl.dropCounter = 0
    gameContinue = gameTick()
    ctx.clearRect(0, 0, maxWidth, maxHeight)
    draw(ctx, player.matrix)
    drawPoints(ctx, player.points)
  }

  if (gameContinue) {
    window.requestAnimationFrame(update)
  }
}

function gameTick () {
  if (tetris.collision(player, { x: player.piecePos.x + 1, y: player.piecePos.y })) {
    if (tetris.checkLineComplete(player.matrix)) {
      let roundPoints = tetris.calculatePointsForLineCompletion(player.matrix)
      if (roundPoints === undefined) {
        // Cheating Detected
        return false
      }
      player.points += roundPoints
      player.matrix = tetris.removeCompleteLines(player.matrix)
    }
    player.piecePos = {x: 0, y: 5}
    player.piece = randomPiece()
    if (tetris.collision(player, player.piecePos, false)) {
      // End Game
      return false
    }
    player.matrix = tetris.createNewPiece(player.matrix, player.piece)
  } else {
    player = tetris.gravity(player)
  }

  return true
}

function randomPiece () {
  return ['I', 'J', 'L', 'O', 'S', 'T', 'Z'][Math.floor(Math.random() * 7)]
}

function playerControl () {
  document.addEventListener('keydown', function (event) {
    let movePos = { x: player.piecePos.x, y: player.piecePos.y }
    if (event.code === 'ArrowLeft') {
      movePos.y--
    } else if (event.code === 'ArrowRight') {
      movePos.y++
    } else if (event.code === 'ArrowDown') {
      movePos.x++
    } else if (event.code === 'ArrowUp') {
      // TODO Rotate
    }

    if (!tetris.collision(player, movePos)) {
      player = tetris.move(player, movePos)
    }
  })
}
