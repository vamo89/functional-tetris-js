const tetris = require('./lib/tetris')

const ctx = document.getElementById('tetris-canvas').getContext('2d')
ctx.scale(20, 20)

const maxWidth = 12
const maxHeight = 20
const colors = tetris.colors()

var matrix = tetris.clearMatrix(maxWidth, maxHeight)

matrix = tetris.createPieceWithMatrix(matrix)('I', 0, 0)
matrix = tetris.createPieceWithMatrix(matrix)('J', 1, 2)
matrix = tetris.createPieceWithMatrix(matrix)('L', 5, 5)
matrix = tetris.createPieceWithMatrix(matrix)('O', 9, 3)
matrix = tetris.createPieceWithMatrix(matrix)('S', 14, 4)
matrix = tetris.createPieceWithMatrix(matrix)('T', 15, 9)
matrix = tetris.createPieceWithMatrix(matrix)('Z', 6, 8)

draw(ctx, matrix)

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
