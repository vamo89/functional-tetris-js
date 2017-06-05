const tetris = require('./lib/tetris')

const ctx = document.getElementById('tetris-canvas').getContext('2d')
ctx.scale(20, 20)

const maxWidth = 12
const maxHeight = 20
const colors = tetris.colors()

var matrix = tetris.clearMatrix(maxWidth, maxHeight)
let lastTime = 0
let dropCounter = 0
const dropInterval = 1000
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

function update (time = 0) {
  dropCounter += time - lastTime
  lastTime = time
  if (dropCounter > dropInterval) {
    dropCounter = 0
    matrix = tetris.createNewPiece(matrix)
    draw(ctx, matrix)
  }

  window.requestAnimationFrame(update)
}
