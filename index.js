const tetris = require('./lib/tetris')

const ctx = document.getElementById('tetris-canvas').getContext('2d')
ctx.scale(20, 20)
ctx.font = '1px times'

const maxWidth = 12
const maxHeight = 20
const colors = tetris.colors()

let matrix = tetris.clearMatrix(maxWidth, maxHeight)
let lastTime = 0
let dropCounter = 0
const dropInterval = 1000
let playerPoints = 0
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
  dropCounter += time - lastTime
  lastTime = time
  if (dropCounter > dropInterval) {
    dropCounter = 0
    gameTick()
    ctx.clearRect(0, 0, maxWidth, maxHeight)
    draw(ctx, matrix)
    drawPoints(ctx, playerPoints)
  }

  window.requestAnimationFrame(update)
}

function gameTick () {
  if (tetris.checkLineComplete(matrix)) {
    playerPoints += tetris.calculatePointsForLineCompletion(matrix)
    matrix = tetris.removeCompleteLines(matrix)
  } else if (tetris.checkFloatingPiece(matrix)) {
    matrix = tetris.gravityWork(matrix)
  } else {
    matrix = tetris.createNewPiece(matrix, randomPiece())
  }
}

function randomPiece () {
  return ['I', 'J', 'L', 'O', 'S', 'T', 'Z'][Math.floor(Math.random() * 7)]
}
