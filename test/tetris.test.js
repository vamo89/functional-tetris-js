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
  t.deepEqual(tetris._clearMatrix(), clearMatrixTest)
})

test('Clear Matrix without default size', (t) => {
  t.deepEqual(tetris._clearMatrix(3, 4), [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ])
})

test('Matrix with piece dont change original matrix', (t) => {
  const originalMatrix = tetris._clearMatrix()
  tetris._createNewPiece(originalMatrix, 'I', { x: 0, y: 0 })
  t.deepEqual(originalMatrix, tetris._clearMatrix())
})

test('Matrix with I at 0,0', (t) => {
  const matrix = tetris._createNewPiece(tetris._clearMatrix(), 'I', { x: 0, y: 0 })
  const matrixToTestAgainst = tetris._clearMatrix()
  matrixToTestAgainst[0][0] = 1
  matrixToTestAgainst[1][0] = 1
  matrixToTestAgainst[2][0] = 1
  matrixToTestAgainst[3][0] = 1
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with J at 0,0', (t) => {
  const matrix = tetris._createNewPiece(tetris._clearMatrix(), 'J', { x: 0, y: 0 })
  const matrixToTestAgainst = tetris._clearMatrix()
  matrixToTestAgainst[0][1] = 2
  matrixToTestAgainst[1][1] = 2
  matrixToTestAgainst[2][1] = 2
  matrixToTestAgainst[2][0] = 2
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with L at 0,0', (t) => {
  const matrix = tetris._createNewPiece(tetris._clearMatrix(), 'L', { x: 0, y: 0 })
  const matrixToTestAgainst = tetris._clearMatrix()
  matrixToTestAgainst[0][0] = 3
  matrixToTestAgainst[1][0] = 3
  matrixToTestAgainst[2][0] = 3
  matrixToTestAgainst[2][1] = 3
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with O at 0,0', (t) => {
  const matrix = tetris._createNewPiece(tetris._clearMatrix(), 'O', { x: 0, y: 0 })
  const matrixToTestAgainst = tetris._clearMatrix()
  matrixToTestAgainst[0][0] = 4
  matrixToTestAgainst[1][0] = 4
  matrixToTestAgainst[0][1] = 4
  matrixToTestAgainst[1][1] = 4
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with S at 0,0', (t) => {
  const matrix = tetris._createNewPiece(tetris._clearMatrix(), 'S', { x: 0, y: 0 })
  const matrixToTestAgainst = tetris._clearMatrix()
  matrixToTestAgainst[0][1] = 5
  matrixToTestAgainst[0][2] = 5
  matrixToTestAgainst[1][1] = 5
  matrixToTestAgainst[1][0] = 5
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with T at 0,0', (t) => {
  const matrix = tetris._createNewPiece(tetris._clearMatrix(), 'T', { x: 0, y: 0 })
  const matrixToTestAgainst = tetris._clearMatrix()
  matrixToTestAgainst[0][0] = 6
  matrixToTestAgainst[0][1] = 6
  matrixToTestAgainst[0][2] = 6
  matrixToTestAgainst[1][1] = 6
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with Z at 0,0', (t) => {
  const matrix = tetris._createNewPiece(tetris._clearMatrix(), 'Z', { x: 0, y: 0 })
  const matrixToTestAgainst = tetris._clearMatrix()
  matrixToTestAgainst[0][0] = 7
  matrixToTestAgainst[0][1] = 7
  matrixToTestAgainst[1][1] = 7
  matrixToTestAgainst[1][2] = 7
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with piece outside 0,0', (t) => {
  const matrix = tetris._createNewPiece(tetris._clearMatrix(), 'I', { x: 5, y: 6 })
  const matrixToTestAgainst = tetris._clearMatrix()
  matrixToTestAgainst[5][6] = 1
  matrixToTestAgainst[6][6] = 1
  matrixToTestAgainst[7][6] = 1
  matrixToTestAgainst[8][6] = 1
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with unknow piece', (t) => {
  const matrix = tetris._createNewPiece(tetris._clearMatrix(), 'M', { x: 0, y: 0 })
  t.deepEqual(tetris._clearMatrix(), matrix)
})

test('Matrix with piece at origin', (t) => {
  const matrix = tetris._createNewPiece(tetris._clearMatrix(), 'I')
  const matrixToTestAgainst = tetris._clearMatrix()
  matrixToTestAgainst[0][5] = 1
  matrixToTestAgainst[1][5] = 1
  matrixToTestAgainst[2][5] = 1
  matrixToTestAgainst[3][5] = 1
  t.deepEqual(matrix, matrixToTestAgainst)
})

test('Matrix with first line complete', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.true(tetris._checkLineComplete(matrix))
})

test('Matrix with middle line complete', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[10] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.true(tetris._checkLineComplete(matrix))
})

test('Matrix with last line complete', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.true(tetris._checkLineComplete(matrix))
})

test('Matrix with line complete with other than 1s', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 6]
  t.true(tetris._checkLineComplete(matrix))
})

test('Matrix with line almost complete - first is 0', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[19] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.false(tetris._checkLineComplete(matrix))
})

test('Matrix with line almost complete - middle is 0', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1]
  t.false(tetris._checkLineComplete(matrix))
})

test('Matrix with line almost complete - last is 0', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  t.false(tetris._checkLineComplete(matrix))
})

test('Matrix with line almost complete - other than 1s', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 0]
  t.false(tetris._checkLineComplete(matrix))
})

test('Matrix with column complete', (t) => {
  const matrix = tetris._clearMatrix().map(row => row.map((value, index) => index === 0 ? 1 : 0))
  t.false(tetris._checkLineComplete(matrix))
})

test('Calculate points - no line complete', (t) => {
  t.is(0, tetris._calculatePointsForLineCompletion(tetris._clearMatrix()))
})

test('Calculate points - line almost complete', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  t.is(tetris._calculatePointsForLineCompletion(matrix), 0)
})

test('Calculate points - line almost complete - other than 1s', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 0]
  t.is(tetris._calculatePointsForLineCompletion(matrix), 0)
})

test('Calculate points - column complete', (t) => {
  const matrix = tetris._clearMatrix().map(row => row.map((value, index) => index === 0 ? 1 : 0))
  t.is(tetris._calculatePointsForLineCompletion(matrix), 0)
})

test('Calculate points - 1 line complete', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(tetris._calculatePointsForLineCompletion(matrix), 40)
})

test('Calculate points - 1 line complete - other than 1s', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 6]
  t.is(tetris._calculatePointsForLineCompletion(matrix), 40)
})

test('Calculate points - 2 lines complete', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(tetris._calculatePointsForLineCompletion(matrix), 100)
})

test('Calculate points - 3 lines complete', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[17] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(tetris._calculatePointsForLineCompletion(matrix), 300)
})

test('Calculate points - 4 lines complete', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[16] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[17] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(tetris._calculatePointsForLineCompletion(matrix), 1200)
})

test('Calculate points - more than 4 lines complete', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[15] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[16] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[17] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(tetris._calculatePointsForLineCompletion(matrix), undefined)
})

test('Remove complete lines - Simple - without other pieces', (t) => {
  const matrix = [
    [0, 0],
    [1, 1]
  ]

  const matrixToTestAgainst = [
    [0, 0],
    [0, 0]
  ]

  t.deepEqual(tetris._removeCompleteLines(matrix), matrixToTestAgainst)
})

test('Remove complete lines - Simple - with other pieces', (t) => {
  const matrix = [
    [1, 0],
    [1, 1]
  ]

  const matrixToTestAgainst = [
    [0, 0],
    [1, 0]
  ]

  t.deepEqual(tetris._removeCompleteLines(matrix), matrixToTestAgainst)
})

test('Remove complete lines - 1 line complete - without other pieces', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.deepEqual(tetris._removeCompleteLines(matrix), tetris._clearMatrix())
})

test('Remove complete lines - 1 line complete - other than 1s - without other pieces', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 6]
  t.deepEqual(tetris._removeCompleteLines(matrix), tetris._clearMatrix())
})

test('Remove complete lines - 2 lines complete - without other pieces', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.deepEqual(tetris._removeCompleteLines(matrix), tetris._clearMatrix())
})

test('Remove complete lines - 1 lines complete - with other pieces', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[16] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrix[17] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  const matrixToTestAgainst = tetris._clearMatrix()
  matrixToTestAgainst[18] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrixToTestAgainst[19] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]

  t.deepEqual(tetris._removeCompleteLines(matrix), matrixToTestAgainst)
})

test('Remove complete lines - 1 line complete - other than 1s - with other pieces', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[17] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrix[18] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 6]

  const matrixToTestAgainst = tetris._clearMatrix()
  matrixToTestAgainst[18] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrixToTestAgainst[19] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]

  t.deepEqual(tetris._removeCompleteLines(matrix), matrixToTestAgainst)
})

test('Remove complete lines - 2 lines complete - with other pieces', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[16] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrix[17] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  const matrixToTestAgainst = tetris._clearMatrix()
  matrixToTestAgainst[18] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrixToTestAgainst[19] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]

  t.deepEqual(tetris._removeCompleteLines(matrix), matrixToTestAgainst)
})

test('Remove complete lines - Simple - with pieces below', (t) => {
  const matrix = [
    [1, 0],
    [1, 1],
    [1, 0]
  ]

  const matrixToTestAgainst = [
    [0, 0],
    [1, 0],
    [1, 0]
  ]

  t.deepEqual(tetris._removeCompleteLines(matrix), matrixToTestAgainst)
})

test('Remove complete lines - 1 lines complete - with pieces below', (t) => {
  const matrix = tetris._clearMatrix()
  matrix[15] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrix[16] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]
  matrix[17] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1]

  const matrixToTestAgainst = tetris._clearMatrix()
  matrixToTestAgainst[17] = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  matrixToTestAgainst[18] = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]
  matrixToTestAgainst[19] = [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1]

  t.deepEqual(tetris._removeCompleteLines(matrix), matrixToTestAgainst)
})

test('Gravity - Simple Test', (t) => {
  const player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  const playerToTestAgainst = {
    matrix: [
      [0, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'I'
  }

  t.deepEqual(tetris._move(player, 'D'), playerToTestAgainst)
})

test('Gravity - Other pieces on board', (t) => {
  const player = {
    matrix: [
      [1, 0, 0, 2],
      [1, 0, 0, 2],
      [1, 0, 2, 2],
      [1, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  const playerToTestAgainst = {
    matrix: [
      [0, 0, 0, 2],
      [1, 0, 0, 2],
      [1, 0, 2, 2],
      [1, 0, 0, 0],
      [1, 0, 0, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'I'
  }

  t.deepEqual(tetris._move(player, 'D'), playerToTestAgainst)
})

test('Gravity - Other pieces near', (t) => {
  const player = {
    matrix: [
      [1, 0, 2, 0],
      [1, 0, 2, 0],
      [1, 2, 2, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  const playerToTestAgainst = {
    matrix: [
      [0, 0, 2, 0],
      [1, 0, 2, 0],
      [1, 2, 2, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'I'
  }

  t.deepEqual(tetris._move(player, 'D'), playerToTestAgainst)
})

test('Gravity - Pieces with same color near', (t) => {
  const player = {
    matrix: [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  const playerToTestAgainst = {
    matrix: [
      [0, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'I'
  }

  t.deepEqual(tetris._move(player, 'D'), playerToTestAgainst)
})

test('Gravity - Pieces with same color near - move the other', (t) => {
  const player = {
    matrix: [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I'
  }

  const playerToTestAgainst = {
    matrix: [
      [1, 0],
      [1, 1],
      [1, 1],
      [1, 1],
      [0, 1]
    ],
    piecePos: { x: 1, y: 1 },
    piece: 'I'
  }

  t.deepEqual(tetris._move(player, 'D'), playerToTestAgainst)
})

test('Collision - Simple Test - False', (t) => {
  const player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  t.false(tetris._collision(player, 'D'))
})

test('Collision - Simple Test - True', (t) => {
  const player = {
    matrix: [
      [0, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'I'
  }

  t.true(tetris._collision(player, 'D'))
})

test('Collision - With another piece - True', (t) => {
  const player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [2, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  t.true(tetris._collision(player, 'D'))
})

test('Collision - With another piece - False', (t) => {
  const player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [0, 2]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  t.false(tetris._collision(player, 'D'))
})

test('Collision - Lateral - False', (t) => {
  const player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  t.false(tetris._collision(player, 'R'))
})

test('Collision - Lateral - True', (t) => {
  const player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  t.true(tetris._collision(player, 'L'))
})

test('Collision - Lateral with another piece - False', (t) => {
  const player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [0, 2]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  t.false(tetris._collision(player, 'R'))
})

test('Collision - Lateral with another piece - True', (t) => {
  const player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 2],
      [0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  t.true(tetris._collision(player, 'R'))
})

test('Move - Simple Test', (t) => {
  const player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  const playerToTestAgainst = {
    matrix: [
      [0, 1],
      [0, 1],
      [0, 1],
      [0, 1],
      [0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I'
  }

  t.deepEqual(tetris._move(player, 'R'), playerToTestAgainst)
})

test('Move - Other pieces on board', (t) => {
  const player = {
    matrix: [
      [1, 0, 0, 2],
      [1, 0, 0, 2],
      [1, 0, 2, 2],
      [1, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  const playerToTestAgainst = {
    matrix: [
      [0, 1, 0, 2],
      [0, 1, 0, 2],
      [0, 1, 2, 2],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I'
  }

  t.deepEqual(tetris._move(player, 'R'), playerToTestAgainst)
})

test('Move - Other pieces near', (t) => {
  const player = {
    matrix: [
      [1, 0, 2, 0],
      [1, 0, 2, 0],
      [1, 0, 2, 2],
      [1, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  const playerToTestAgainst = {
    matrix: [
      [0, 1, 2, 0],
      [0, 1, 2, 0],
      [0, 1, 2, 2],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I'
  }

  t.deepEqual(tetris._move(player, 'R'), playerToTestAgainst)
})

test('Move - Pieces with same color near', (t) => {
  const player = {
    matrix: [
      [1, 0, 1],
      [1, 0, 1],
      [1, 0, 1],
      [1, 0, 1]
    ],
    piecePos: { x: 0, y: 2 },
    piece: 'I'
  }

  const playerToTestAgainst = {
    matrix: [
      [1, 1, 0],
      [1, 1, 0],
      [1, 1, 0],
      [1, 1, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I'
  }

  t.deepEqual(tetris._move(player, 'L'), playerToTestAgainst)
})

test('Rotate - I - 1', (t) => {
  const player = {
    matrix: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 1
  }
  t.deepEqual(tetris._rotate(player), playerRotation1)
})

test('Rotate - I - 2', (t) => {
  const player = {
    matrix: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }

  const playerRotation2 = {
    matrix: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 2
  }
  t.deepEqual(tetris._rotate(tetris._rotate(player)), playerRotation2)
})

test('Rotate - I - 3', (t) => {
  const player = {
    matrix: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }

  const playerRotation3 = {
    matrix: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 3
  }
  t.deepEqual(tetris._rotate(tetris._rotate(tetris._rotate(player))), playerRotation3)
})

test('Rotate - I - 4', (t) => {
  const player = {
    matrix: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }

  const playerRotation4 = {
    matrix: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }
  t.deepEqual(tetris._rotate(tetris._rotate(tetris._rotate(tetris._rotate(player)))), playerRotation4)
})

test('Rotate - J - 1', (t) => {
  const player = {
    matrix: [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'J',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [2, 0, 0, 0],
      [2, 2, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'J',
    pieceRotation: 1
  }
  t.deepEqual(tetris._rotate(player), playerRotation1)
})

test('Rotate - J - 2', (t) => {
  const player = {
    matrix: [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'J',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 2, 2, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'J',
    pieceRotation: 2
  }
  t.deepEqual(tetris._rotate(tetris._rotate(player)), playerRotation1)
})

test('Rotate - J - 3', (t) => {
  const player = {
    matrix: [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'J',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 0, 0, 0],
      [2, 2, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'J',
    pieceRotation: 3
  }
  t.deepEqual(tetris._rotate(tetris._rotate(tetris._rotate(player))), playerRotation1)
})

test('Rotate - L - 1', (t) => {
  const player = {
    matrix: [
      [0, 3, 0, 0],
      [0, 3, 0, 0],
      [0, 3, 3, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'L',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 0, 0, 0],
      [3, 3, 3, 0],
      [3, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'L',
    pieceRotation: 1
  }
  t.deepEqual(tetris._rotate(player), playerRotation1)
})

test('Rotate - L - 2', (t) => {
  const player = {
    matrix: [
      [0, 3, 0, 0],
      [0, 3, 0, 0],
      [0, 3, 3, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'L',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [3, 3, 0, 0],
      [0, 3, 0, 0],
      [0, 3, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'L',
    pieceRotation: 2
  }
  t.deepEqual(tetris._rotate(tetris._rotate(player)), playerRotation1)
})

test('Rotate - L - 3', (t) => {
  const player = {
    matrix: [
      [0, 3, 0, 0],
      [0, 3, 0, 0],
      [0, 3, 3, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'L',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 0, 3, 0],
      [3, 3, 3, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'L',
    pieceRotation: 3
  }
  t.deepEqual(tetris._rotate(tetris._rotate(tetris._rotate(player))), playerRotation1)
})

test('Rotate - O', (t) => {
  const player = {
    matrix: [
      [4, 4, 0],
      [4, 4, 0],
      [0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'O',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [4, 4, 0],
      [4, 4, 0],
      [0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'O',
    pieceRotation: 1
  }
  t.deepEqual(tetris._rotate(player), playerRotation1)
})

test('Rotate - S - 1', (t) => {
  const player = {
    matrix: [
      [0, 0, 0],
      [0, 5, 5],
      [5, 5, 0],
      [0, 0, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'S',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [5, 0, 0],
      [5, 5, 0],
      [0, 5, 0],
      [0, 0, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'S',
    pieceRotation: 1
  }
  t.deepEqual(tetris._rotate(player), playerRotation1)
})

test('Rotate - T - 1', (t) => {
  const player = {
    matrix: [
      [0, 0, 0],
      [6, 6, 6],
      [0, 6, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'T',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 6, 0],
      [6, 6, 0],
      [0, 6, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'T',
    pieceRotation: 1
  }
  t.deepEqual(tetris._rotate(player), playerRotation1)
})

test('Rotate - T - 2', (t) => {
  const player = {
    matrix: [
      [0, 0, 0],
      [6, 6, 6],
      [0, 6, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'T',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 6, 0],
      [6, 6, 6],
      [0, 0, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'T',
    pieceRotation: 2
  }
  t.deepEqual(tetris._rotate(tetris._rotate(player)), playerRotation1)
})

test('Rotate - T - 3', (t) => {
  const player = {
    matrix: [
      [0, 0, 0],
      [6, 6, 6],
      [0, 6, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'T',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 6, 0],
      [0, 6, 6],
      [0, 6, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'T',
    pieceRotation: 3
  }
  t.deepEqual(tetris._rotate(tetris._rotate(tetris._rotate(player))), playerRotation1)
})

test('Rotate - Z - 1', (t) => {
  const player = {
    matrix: [
      [0, 0, 0],
      [7, 7, 0],
      [0, 7, 7],
      [0, 0, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'Z',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 7, 0],
      [7, 7, 0],
      [7, 0, 0],
      [0, 0, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'Z',
    pieceRotation: 1
  }
  t.deepEqual(tetris._rotate(player), playerRotation1)
})

test('Fail Rotate - I - 1 - with other I', (t) => {
  const player = {
    matrix: [
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }
  t.deepEqual(tetris._rotate(player), player)
})

test('Fail Rotate - I - 1 - with other pieces', (t) => {
  const player = {
    matrix: [
      [0, 1, 2, 0],
      [0, 1, 3, 0],
      [0, 1, 4, 0],
      [0, 1, 5, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }
  t.deepEqual(tetris._rotate(player), player)
})

test('Fail Rotate - I - 1 - near border', (t) => {
  const player = {
    matrix: [
      [0, 1],
      [0, 1],
      [0, 1],
      [0, 1]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }
  t.deepEqual(tetris._rotate(player), player)
})
