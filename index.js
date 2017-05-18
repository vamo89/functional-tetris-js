const tetris = require('./lib/tetris')

const ctx = document.getElementById('tetris-canvas').getContext('2d')
ctx.scale(20, 20)
ctx.fillStyle = 'red'

const maxWidth = 12
const maxHeight = 20
const matrix = tetris.clearMatrix(maxWidth, maxHeight)

// Create T piece
matrix[2][1] = 1
matrix[2][2] = 1
matrix[2][3] = 1
matrix[3][2] = 1

// Create L piece
matrix[5][5] = 1
matrix[6][5] = 1
matrix[7][5] = 1
matrix[7][6] = 1

// Create inverted-L piece
matrix[12][2] = 1
matrix[13][2] = 1
matrix[14][2] = 1
matrix[14][1] = 1

// Create I piece
matrix[1][8] = 1
matrix[2][8] = 1
matrix[3][8] = 1
matrix[4][8] = 1

// Create O piece
matrix[8][8] = 1
matrix[9][8] = 1
matrix[8][9] = 1
matrix[9][9] = 1

// Create Z piece
matrix[15][5] = 1
matrix[15][6] = 1
matrix[16][6] = 1
matrix[16][7] = 1

// Create inverted-Z piece
matrix[12][5] = 1
matrix[12][6] = 1
matrix[13][5] = 1
matrix[13][4] = 1

draw(ctx, matrix)

function draw (ctx, matrix) {
  matrix.forEach((row, y) =>
    row.forEach((value, x) => {
      if (value) { ctx.fillRect(x, y, 1, 1) }
    })
  )
}
