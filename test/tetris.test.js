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

test('Matrix with piece dont change original matrix', (t) => {
  var originalMatrix = tetris.clearMatrix()
  tetris.createPieceWithMatrix(originalMatrix)('I', 0, 0)
  t.deepEqual(originalMatrix, tetris.clearMatrix())
})

test('Matrix with I at 0,0', (t) => {
  var matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('I', 0, 0)
  var matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][0] = 1
  matrixToTestAgainst[1][0] = 1
  matrixToTestAgainst[2][0] = 1
  matrixToTestAgainst[3][0] = 1
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with J at 0,0', (t) => {
  var matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('J', 0, 0)
  var matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][1] = 2
  matrixToTestAgainst[1][1] = 2
  matrixToTestAgainst[2][1] = 2
  matrixToTestAgainst[2][0] = 2
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with L at 0,0', (t) => {
  var matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('L', 0, 0)
  var matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][0] = 3
  matrixToTestAgainst[1][0] = 3
  matrixToTestAgainst[2][0] = 3
  matrixToTestAgainst[2][1] = 3
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with O at 0,0', (t) => {
  var matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('O', 0, 0)
  var matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][0] = 4
  matrixToTestAgainst[1][0] = 4
  matrixToTestAgainst[0][1] = 4
  matrixToTestAgainst[1][1] = 4
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with S at 0,0', (t) => {
  var matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('S', 0, 0)
  var matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][1] = 5
  matrixToTestAgainst[0][2] = 5
  matrixToTestAgainst[1][1] = 5
  matrixToTestAgainst[1][0] = 5
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with T at 0,0', (t) => {
  var matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('T', 0, 0)
  var matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][0] = 6
  matrixToTestAgainst[0][1] = 6
  matrixToTestAgainst[0][2] = 6
  matrixToTestAgainst[1][1] = 6
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with Z at 0,0', (t) => {
  var matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('Z', 0, 0)
  var matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][0] = 7
  matrixToTestAgainst[0][1] = 7
  matrixToTestAgainst[1][1] = 7
  matrixToTestAgainst[1][2] = 7
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with piece outside 0,0', (t) => {
  var matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('I', 5, 6)
  var matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[5][6] = 1
  matrixToTestAgainst[6][6] = 1
  matrixToTestAgainst[7][6] = 1
  matrixToTestAgainst[8][6] = 1
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with unknow piece', (t) => {
  var matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('M', 0, 0)
  t.deepEqual(tetris.clearMatrix(), matrix)
})
