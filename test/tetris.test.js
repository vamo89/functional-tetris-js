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

test('Calculate level - initial', (t) => {
  t.is(tetris._calculateLevel(0), 0)
})

test('Calculate level - before first change', (t) => {
  t.is(tetris._calculateLevel(199), 0)
})

test('Calculate level - 1', (t) => {
  t.is(tetris._calculateLevel(200), 1)
})

test('Calculate level - 2', (t) => {
  t.is(tetris._calculateLevel(400), 2)
})

test('Calculate level - before 6th change', (t) => {
  t.is(tetris._calculateLevel(1199), 5)
})

test('Calculate level - 6', (t) => {
  t.is(tetris._calculateLevel(1200), 6)
})

test('Calculate drop interval - initial', (t) => {
  t.is(tetris._calculateDropInterval(0), 200)
})

test('Calculate drop interval - first change', (t) => {
  t.is(tetris._calculateDropInterval(1), 180)
})

test('Calculate drop interval - second change', (t) => {
  t.is(tetris._calculateDropInterval(2), 160)
})

test('Calculate drop interval - before 6th change', (t) => {
  t.is(tetris._calculateDropInterval(5), 100)
})

test('Calculate drop interval - 6th change', (t) => {
  t.is(tetris._calculateDropInterval(6), 90)
})

test('Calculate drop interval - 7th change', (t) => {
  t.is(tetris._calculateDropInterval(7), 80)
})

test('Calculate drop interval - before last change', (t) => {
  t.is(tetris._calculateDropInterval(9), 60)
})

test('Calculate drop interval - last change', (t) => {
  t.is(tetris._calculateDropInterval(10), 50)
})

test('Calculate drop interval - way after last change', (t) => {
  t.is(tetris._calculateDropInterval(20), 50)
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
