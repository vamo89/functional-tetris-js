const tetris = require('./lib/tetris')

const ctx = document.getElementById('tetris-canvas').getContext('2d')
ctx.scale(20, 20)
ctx.fillStyle = 'red'

const maxWidth = 12
const maxHeight = 20
const matrix = tetris.clearMatrix(maxWidth, maxHeight)

matrix[2][1] = 1

draw(ctx, matrix)

function draw (ctx, matrix) {
  matrix.forEach((row, y) =>
    row.forEach((value, x) => {
      if (value) { ctx.fillRect(x, y, 1, 1) }
    })
  )
}
