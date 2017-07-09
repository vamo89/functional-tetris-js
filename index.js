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
  timeControl.dropCounter += time - timeControl.lastTime
  timeControl.lastTime = time
  if (timeControl.dropCounter > timeControl.dropInterval) {
    timeControl.dropCounter = 0
    gameTick()
    ctx.clearRect(0, 0, maxWidth, maxHeight)
    draw(ctx, player.matrix)
    drawPoints(ctx, player.points)
  }

  window.requestAnimationFrame(update)
}

function gameTick () {
  if (tetris.collision(player)) {
    if (tetris.checkLineComplete(player.matrix)) {
      let roundPoints = tetris.calculatePointsForLineCompletion(player.matrix)
      if (roundPoints === undefined) {
        // throw error - cheating detected
        return
      }
      player.points += roundPoints
      player.matrix = tetris.removeCompleteLines(player.matrix)
    }
    player.piecePos = {x: 0, y: 5}
    player.piece = randomPiece()
    player.matrix = tetris.createNewPiece(player.matrix, player.piece)
  } else {
    player = tetris.gravityWork(player)
  }
}

function randomPiece () {
  return ['I', 'J', 'L', 'O', 'S', 'T', 'Z'][Math.floor(Math.random() * 7)]
}
