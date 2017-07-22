const test = require('ava')
const tetris = require('../lib/tetris')

const clearMatrixTest = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

test('Clear Matrix', (t) => {
  t.deepEqual(tetris.clearMatrix(), clearMatrixTest)
})

test('Clear Matrix without default size', (t) => {
  t.deepEqual(tetris.clearMatrix(3, 4), [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ])
})

test('Matrix with piece dont change original matrix', (t) => {
  let originalMatrix = tetris.clearMatrix()
  tetris.createNewPiece(originalMatrix, 'I', {x: 0, y: 0})
  t.deepEqual(originalMatrix, tetris.clearMatrix())
})

test('Matrix with I at 0,0', (t) => {
  let matrix = tetris.createNewPiece(tetris.clearMatrix(), 'I', {x: 0, y: 0})
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][0] = 1
  matrixToTestAgainst[1][0] = 1
  matrixToTestAgainst[2][0] = 1
  matrixToTestAgainst[3][0] = 1
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with J at 0,0', (t) => {
  let matrix = tetris.createNewPiece(tetris.clearMatrix(), 'J', {x: 0, y: 0})
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][1] = 2
  matrixToTestAgainst[1][1] = 2
  matrixToTestAgainst[2][1] = 2
  matrixToTestAgainst[2][0] = 2
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with L at 0,0', (t) => {
  let matrix = tetris.createNewPiece(tetris.clearMatrix(), 'L', {x: 0, y: 0})
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][0] = 3
  matrixToTestAgainst[1][0] = 3
  matrixToTestAgainst[2][0] = 3
  matrixToTestAgainst[2][1] = 3
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with O at 0,0', (t) => {
  let matrix = tetris.createNewPiece(tetris.clearMatrix(), 'O', {x: 0, y: 0})
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][0] = 4
  matrixToTestAgainst[1][0] = 4
  matrixToTestAgainst[0][1] = 4
  matrixToTestAgainst[1][1] = 4
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with S at 0,0', (t) => {
  let matrix = tetris.createNewPiece(tetris.clearMatrix(), 'S', {x: 0, y: 0})
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][1] = 5
  matrixToTestAgainst[0][2] = 5
  matrixToTestAgainst[1][1] = 5
  matrixToTestAgainst[1][0] = 5
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with T at 0,0', (t) => {
  let matrix = tetris.createNewPiece(tetris.clearMatrix(), 'T', {x: 0, y: 0})
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][0] = 6
  matrixToTestAgainst[0][1] = 6
  matrixToTestAgainst[0][2] = 6
  matrixToTestAgainst[1][1] = 6
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with Z at 0,0', (t) => {
  let matrix = tetris.createNewPiece(tetris.clearMatrix(), 'Z', {x: 0, y: 0})
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][0] = 7
  matrixToTestAgainst[0][1] = 7
  matrixToTestAgainst[1][1] = 7
  matrixToTestAgainst[1][2] = 7
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with piece outside 0,0', (t) => {
  let matrix = tetris.createNewPiece(tetris.clearMatrix(), 'I', {x: 5, y: 6})
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[5][6] = 1
  matrixToTestAgainst[6][6] = 1
  matrixToTestAgainst[7][6] = 1
  matrixToTestAgainst[8][6] = 1
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with unknow piece', (t) => {
  let matrix = tetris.createNewPiece(tetris.clearMatrix(), 'M', {x: 0, y: 0})
  t.deepEqual(tetris.clearMatrix(), matrix)
})

test('Matrix with piece at origin', (t) => {
  let matrix = tetris.createNewPiece(tetris.clearMatrix(), 'I')
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][5] = 1
  matrixToTestAgainst[1][5] = 1
  matrixToTestAgainst[2][5] = 1
  matrixToTestAgainst[3][5] = 1
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with first line complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.true(tetris.checkLineComplete(matrix))
})

test('Matrix with middle line complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[10] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.true(tetris.checkLineComplete(matrix))
})

test('Matrix with last line complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.true(tetris.checkLineComplete(matrix))
})

test('Matrix with line complete with other than 1s', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 6]
  t.true(tetris.checkLineComplete(matrix))
})

test('Matrix with line almost complete - first is 0', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.false(tetris.checkLineComplete(matrix))
})

test('Matrix with line almost complete - middle is 0', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1]
  t.false(tetris.checkLineComplete(matrix))
})

test('Matrix with line almost complete - last is 0', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  t.false(tetris.checkLineComplete(matrix))
})

test('Matrix with line almost complete - other than 1s', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 0]
  t.false(tetris.checkLineComplete(matrix))
})

test('Matrix with column complete', (t) => {
  let matrix = tetris.clearMatrix().map(row => row.map((value, index) => index === 0 ? 1 : 0))
  t.false(tetris.checkLineComplete(matrix))
})

test('Calculate points - no line complete', (t) => {
  t.is(0, tetris.calculatePointsForLineCompletion(tetris.clearMatrix()))
})

test('Calculate points - line almost complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  t.is(tetris.calculatePointsForLineCompletion(matrix), 0)
})

test('Calculate points - line almost complete - other than 1s', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 0]
  t.is(tetris.calculatePointsForLineCompletion(matrix), 0)
})

test('Calculate points - column complete', (t) => {
  let matrix = tetris.clearMatrix().map(row => row.map((value, index) => index === 0 ? 1 : 0))
  t.is(tetris.calculatePointsForLineCompletion(matrix), 0)
})

test('Calculate points - 1 line complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(tetris.calculatePointsForLineCompletion(matrix), 40)
})

test('Calculate points - 1 line complete - other than 1s', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 6]
  t.is(tetris.calculatePointsForLineCompletion(matrix), 40)
})

test('Calculate points - 2 lines complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(tetris.calculatePointsForLineCompletion(matrix), 100)
})

test('Calculate points - 3 lines complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[17] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(tetris.calculatePointsForLineCompletion(matrix), 300)
})

test('Calculate points - 4 lines complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[16] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[17] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(tetris.calculatePointsForLineCompletion(matrix), 1200)
})

test('Calculate points - more than 4 lines complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[15] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[16] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[17] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(tetris.calculatePointsForLineCompletion(matrix), undefined)
})

test('Remove complete lines - Simple - without other pieces', (t) => {
  let matrix = [
    [0, 0],
    [1, 1]
  ]

  let matrixToTestAgainst = [
    [0, 0],
    [0, 0]
  ]

  t.deepEqual(tetris.removeCompleteLines(matrix), matrixToTestAgainst)
})

test('Remove complete lines - Simple - with other pieces', (t) => {
  let matrix = [
    [1, 0],
    [1, 1]
  ]

  let matrixToTestAgainst = [
    [0, 0],
    [1, 0]
  ]

  t.deepEqual(tetris.removeCompleteLines(matrix), matrixToTestAgainst)
})

test('Remove complete lines - 1 line complete - without other pieces', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.deepEqual(tetris.removeCompleteLines(matrix), tetris.clearMatrix())
})

test('Remove complete lines - 1 line complete - other than 1s - without other pieces', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 6]
  t.deepEqual(tetris.removeCompleteLines(matrix), tetris.clearMatrix())
})

test('Remove complete lines - 2 lines complete - without other pieces', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.deepEqual(tetris.removeCompleteLines(matrix), tetris.clearMatrix())
})

test('Remove complete lines - 1 lines complete - with other pieces', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[16] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrix[17] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[18] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrixToTestAgainst[19] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]

  t.deepEqual(tetris.removeCompleteLines(matrix), matrixToTestAgainst)
})

test('Remove complete lines - 1 line complete - other than 1s - with other pieces', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[17] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrix[18] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 6]

  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[18] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrixToTestAgainst[19] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]

  t.deepEqual(tetris.removeCompleteLines(matrix), matrixToTestAgainst)
})

test('Remove complete lines - 2 lines complete - with other pieces', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[16] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrix[17] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[18] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrixToTestAgainst[19] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]

  t.deepEqual(tetris.removeCompleteLines(matrix), matrixToTestAgainst)
})

test('Remove complete lines - Simple - with pieces below', (t) => {
  let matrix = [
    [1, 0],
    [1, 1],
    [1, 0]
  ]

  let matrixToTestAgainst = [
    [0, 0],
    [1, 0],
    [1, 0]
  ]

  t.deepEqual(tetris.removeCompleteLines(matrix), matrixToTestAgainst)
})

test('Remove complete lines - 1 lines complete - with pieces below', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[15] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrix[16] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]
  matrix[17] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1]

  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[17] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrixToTestAgainst[18] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]
  matrixToTestAgainst[19] = [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1]

  t.deepEqual(tetris.removeCompleteLines(matrix), matrixToTestAgainst)
})

test('Gravity - Simple Test', (t) => {
  let player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [0, 0]
    ],
    piecePos: {x: 0, y: 0},
    piece: 'I'
  }

  let playerToTestAgainst = {
    matrix: [
      [0, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0]
    ],
    piecePos: {x: 1, y: 0},
    piece: 'I'
  }

  t.deepEqual(tetris.gravity(player), playerToTestAgainst)
})

test('Gravity - Other pieces on board', (t) => {
  let player = {
    matrix: [
      [1, 0, 0, 2],
      [1, 0, 0, 2],
      [1, 0, 2, 2],
      [1, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: {x: 0, y: 0},
    piece: 'I'
  }

  let playerToTestAgainst = {
    matrix: [
      [0, 0, 0, 2],
      [1, 0, 0, 2],
      [1, 0, 2, 2],
      [1, 0, 0, 0],
      [1, 0, 0, 0]
    ],
    piecePos: {x: 1, y: 0},
    piece: 'I'
  }

  t.deepEqual(tetris.gravity(player), playerToTestAgainst)
})

test('Gravity - Other pieces near', (t) => {
  let player = {
    matrix: [
      [1, 0, 2, 0],
      [1, 0, 2, 0],
      [1, 2, 2, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: {x: 0, y: 0},
    piece: 'I'
  }

  let playerToTestAgainst = {
    matrix: [
      [0, 0, 2, 0],
      [1, 0, 2, 0],
      [1, 2, 2, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0]
    ],
    piecePos: {x: 1, y: 0},
    piece: 'I'
  }

  t.deepEqual(tetris.gravity(player), playerToTestAgainst)
})

test('Gravity - Pieces with same color near', (t) => {
  let player = {
    matrix: [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [0, 0]
    ],
    piecePos: {x: 0, y: 0},
    piece: 'I'
  }

  let playerToTestAgainst = {
    matrix: [
      [0, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 0]
    ],
    piecePos: {x: 1, y: 0},
    piece: 'I'
  }

  t.deepEqual(tetris.gravity(player), playerToTestAgainst)
})

test('Gravity - Pieces with same color near - move the other', (t) => {
  let player = {
    matrix: [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [0, 0]
    ],
    piecePos: {x: 0, y: 1},
    piece: 'I'
  }

  let playerToTestAgainst = {
    matrix: [
      [1, 0],
      [1, 1],
      [1, 1],
      [1, 1],
      [0, 1]
    ],
    piecePos: {x: 1, y: 1},
    piece: 'I'
  }

  t.deepEqual(tetris.gravity(player), playerToTestAgainst)
})

test('Collision - Simple Test - False', (t) => {
  let player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [0, 0]
    ],
    piecePos: {x: 0, y: 0},
    piece: 'I'
  }

  t.false(tetris.collision(player, {x: 1, y: 0}))
})

test('Collision - Simple Test - True', (t) => {
  let player = {
    matrix: [
      [0, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0]
    ],
    piecePos: {x: 1, y: 0},
    piece: 'I'
  }

  t.true(tetris.collision(player, {x: 2, y: 0}))
})

test('Collision - With another piece - True', (t) => {
  let player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [2, 0]
    ],
    piecePos: {x: 0, y: 0},
    piece: 'I'
  }

  t.true(tetris.collision(player, {x: 1, y: 0}))
})

test('Collision - With another piece - False', (t) => {
  let player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [0, 2]
    ],
    piecePos: {x: 0, y: 0},
    piece: 'I'
  }

  t.false(tetris.collision(player, {x: 1, y: 0}))
})
