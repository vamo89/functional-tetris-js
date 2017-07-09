module.exports = {
  colors: function () {
    return [
      '',
      'cyan', // I
      'blue', // J
      'orange', // L
      'yellow', // O
      'lime', // S
      'purple', // T
      'red' // Z
    ]
  },

  clearMatrix: function (width = 12, height = 20) {
    return Array.from(Array(height), () => Array.from(Array(width), () => 0))
  },

  createNewPiece: function (matrix, piece, pos = {x: 0, y: 5}) {
    return insertPiece(matrix, piece, pos, pieceId)
  },

  checkLineComplete: function (matrix) {
    return matrix.some(row => filled(row))
  },

  calculatePointsForLineCompletion: function (matrix) {
    return pointsPerLineCompleted()[numberOfFilledLines(matrix)]
  },

  removeCompleteLines: function (originalMatrix) {
    let m = originalMatrix.filter(row => !filled(row))
    while (m.length < originalMatrix.length) {
      m.unshift(clearRow(originalMatrix[0].length))
    }
    return m
  },

  checkFloatingPiece: function (matrix) {
    return false
  },

  gravityWork: function (originalPlayer) {
    return originalPlayer
  },

  colision: function (player) {
    return false
  }

}

function pointsPerLineCompleted () {
  return [
    0,
    40,
    100,
    300,
    1200
  ]
}

function filled (row) {
  return row.every(value => value > 0)
}

function clearRow (width = 12) {
  return new Array(width).fill(0)
}

function numberOfFilledLines (matrix) {
  return matrix.filter(filled).length
}

function pieceId (piece) {
  return ['', 'I', 'J', 'L', 'O', 'S', 'T', 'Z'].indexOf(piece)
}

function insertPiece (originalMatrix, piece, pos, idFunction) {
  var matrix = JSON.parse(JSON.stringify(originalMatrix))
  let id = idFunction(piece)
  switch (piece) {
    case 'I':
      matrix[pos.x][pos.y] = id
      matrix[pos.x + 1][pos.y] = id
      matrix[pos.x + 2][pos.y] = id
      matrix[pos.x + 3][pos.y] = id
      break
    case 'J':
      matrix[pos.x][pos.y + 1] = id
      matrix[pos.x + 1][pos.y + 1] = id
      matrix[pos.x + 2][pos.y + 1] = id
      matrix[pos.x + 2][pos.y] = id
      break
    case 'L':
      matrix[pos.x][pos.y] = id
      matrix[pos.x + 1][pos.y] = id
      matrix[pos.x + 2][pos.y] = id
      matrix[pos.x + 2][pos.y + 1] = id
      break
    case 'O':
      matrix[pos.x][pos.y] = id
      matrix[pos.x + 1][pos.y] = id
      matrix[pos.x][pos.y + 1] = id
      matrix[pos.x + 1][pos.y + 1] = id
      break
    case 'S':
      matrix[pos.x][pos.y + 1] = id
      matrix[pos.x][pos.y + 2] = id
      matrix[pos.x + 1][pos.y + 1] = id
      matrix[pos.x + 1][pos.y] = id
      break
    case 'T':
      matrix[pos.x][pos.y] = id
      matrix[pos.x][pos.y + 1] = id
      matrix[pos.x][pos.y + 2] = id
      matrix[pos.x + 1][pos.y + 1] = id
      break
    case 'Z':
      matrix[pos.x][pos.y] = id
      matrix[pos.x][pos.y + 1] = id
      matrix[pos.x + 1][pos.y + 1] = id
      matrix[pos.x + 1][pos.y + 2] = id
      break
  }
  return matrix
}
