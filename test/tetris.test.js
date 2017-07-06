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
  let originalMatrix = tetris.clearMatrix()
  tetris.createPieceWithMatrix(originalMatrix)('I', 0, 0)
  t.deepEqual(originalMatrix, tetris.clearMatrix())
})

test('Matrix with I at 0,0', (t) => {
  let matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('I', 0, 0)
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][0] = 1
  matrixToTestAgainst[1][0] = 1
  matrixToTestAgainst[2][0] = 1
  matrixToTestAgainst[3][0] = 1
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with J at 0,0', (t) => {
  let matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('J', 0, 0)
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][1] = 2
  matrixToTestAgainst[1][1] = 2
  matrixToTestAgainst[2][1] = 2
  matrixToTestAgainst[2][0] = 2
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with L at 0,0', (t) => {
  let matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('L', 0, 0)
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][0] = 3
  matrixToTestAgainst[1][0] = 3
  matrixToTestAgainst[2][0] = 3
  matrixToTestAgainst[2][1] = 3
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with O at 0,0', (t) => {
  let matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('O', 0, 0)
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][0] = 4
  matrixToTestAgainst[1][0] = 4
  matrixToTestAgainst[0][1] = 4
  matrixToTestAgainst[1][1] = 4
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with S at 0,0', (t) => {
  let matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('S', 0, 0)
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][1] = 5
  matrixToTestAgainst[0][2] = 5
  matrixToTestAgainst[1][1] = 5
  matrixToTestAgainst[1][0] = 5
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with T at 0,0', (t) => {
  let matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('T', 0, 0)
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][0] = 6
  matrixToTestAgainst[0][1] = 6
  matrixToTestAgainst[0][2] = 6
  matrixToTestAgainst[1][1] = 6
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with Z at 0,0', (t) => {
  let matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('Z', 0, 0)
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][0] = 7
  matrixToTestAgainst[0][1] = 7
  matrixToTestAgainst[1][1] = 7
  matrixToTestAgainst[1][2] = 7
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with piece outside 0,0', (t) => {
  let matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('I', 5, 6)
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[5][6] = 1
  matrixToTestAgainst[6][6] = 1
  matrixToTestAgainst[7][6] = 1
  matrixToTestAgainst[8][6] = 1
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with unknow piece', (t) => {
  let matrix = tetris.createPieceWithMatrix(tetris.clearMatrix())('M', 0, 0)
  t.deepEqual(tetris.clearMatrix(), matrix)
})

test('Matrix with piece at origin', (t) => {
  let matrix = tetris.createNewPiece(tetris.clearMatrix(), 'I')
  let matrixToTestAgainst = tetris.clearMatrix()
  matrixToTestAgainst[0][5] = 1
  matrixToTestAgainst[1][5] = 1
  matrixToTestAgainst[2][5] = 1
  matrixToTestAgainst[3][5] = 1
  t.deepEqual(matrixToTestAgainst, matrix)
})

test('Matrix with first line complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(true, tetris.checkLineComplete(matrix))
})

test('Matrix with middle line complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[10] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(true, tetris.checkLineComplete(matrix))
})

test('Matrix with last line complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(true, tetris.checkLineComplete(matrix))
})

test('Matrix with line complete with other than 1s', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 6]
  t.is(true, tetris.checkLineComplete(matrix))
})

test('Matrix with line almost complete - first is 0', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(false, tetris.checkLineComplete(matrix))
})

test('Matrix with line almost complete - middle is 0', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1]
  t.is(false, tetris.checkLineComplete(matrix))
})

test('Matrix with line almost complete - last is 0', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  t.is(false, tetris.checkLineComplete(matrix))
})

test('Matrix with line almost complete - other than 1s', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 0]
  t.is(false, tetris.checkLineComplete(matrix))
})

test('Matrix with column complete', (t) => {
  let matrix = tetris.clearMatrix().map(row => row.map((value, index) => index === 0 ? 1 : 0))
  t.is(false, tetris.checkLineComplete(matrix))
})

test('Calculate points - no line complete', (t) => {
  t.is(0, tetris.calculatePointsForLineCompletion(tetris.clearMatrix()))
})

test('Calculate points - line almost complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  t.is(0, tetris.calculatePointsForLineCompletion(matrix))
})

test('Calculate points - line almost complete - other than 1s', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 0]
  t.is(0, tetris.calculatePointsForLineCompletion(matrix))
})

test('Calculate points - column complete', (t) => {
  let matrix = tetris.clearMatrix().map(row => row.map((value, index) => index === 0 ? 1 : 0))
  t.is(0, tetris.calculatePointsForLineCompletion(matrix))
})

test('Calculate points - 1 line complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(40, tetris.calculatePointsForLineCompletion(matrix))
})

test('Calculate points - 1 line complete - other than 1s', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[19] = [2, 2, 2, 3, 3, 5, 4, 4, 5, 2, 2, 6]
  t.is(40, tetris.calculatePointsForLineCompletion(matrix))
})

test('Calculate points - 2 lines complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(100, tetris.calculatePointsForLineCompletion(matrix))
})

test('Calculate points - 3 lines complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[17] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(300, tetris.calculatePointsForLineCompletion(matrix))
})

test('Calculate points - 4 lines complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[16] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[17] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(1200, tetris.calculatePointsForLineCompletion(matrix))
})

test('Calculate points - more than 4 lines complete', (t) => {
  let matrix = tetris.clearMatrix()
  matrix[15] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[16] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[17] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[18] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  matrix[19] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  t.is(undefined, tetris.calculatePointsForLineCompletion(matrix))
})
