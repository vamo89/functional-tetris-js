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

  createPieceWithMatrix: function (originalMatrix, piece, pos) {
    var matrix = JSON.parse(JSON.stringify(originalMatrix))
    switch (piece) {
      case 'I':
        matrix[pos.x][pos.y] = 1
        matrix[pos.x + 1][pos.y] = 1
        matrix[pos.x + 2][pos.y] = 1
        matrix[pos.x + 3][pos.y] = 1
        break
      case 'J':
        matrix[pos.x][pos.y + 1] = 2
        matrix[pos.x + 1][pos.y + 1] = 2
        matrix[pos.x + 2][pos.y + 1] = 2
        matrix[pos.x + 2][pos.y] = 2
        break
      case 'L':
        matrix[pos.x][pos.y] = 3
        matrix[pos.x + 1][pos.y] = 3
        matrix[pos.x + 2][pos.y] = 3
        matrix[pos.x + 2][pos.y + 1] = 3
        break
      case 'O':
        matrix[pos.x][pos.y] = 4
        matrix[pos.x + 1][pos.y] = 4
        matrix[pos.x][pos.y + 1] = 4
        matrix[pos.x + 1][pos.y + 1] = 4
        break
      case 'S':
        matrix[pos.x][pos.y + 1] = 5
        matrix[pos.x][pos.y + 2] = 5
        matrix[pos.x + 1][pos.y + 1] = 5
        matrix[pos.x + 1][pos.y] = 5
        break
      case 'T':
        matrix[pos.x][pos.y] = 6
        matrix[pos.x][pos.y + 1] = 6
        matrix[pos.x][pos.y + 2] = 6
        matrix[pos.x + 1][pos.y + 1] = 6
        break
      case 'Z':
        matrix[pos.x][pos.y] = 7
        matrix[pos.x][pos.y + 1] = 7
        matrix[pos.x + 1][pos.y + 1] = 7
        matrix[pos.x + 1][pos.y + 2] = 7
        break
    }
    return matrix
  },

  createNewPiece: function (matrix, piece) {
    return this.createPieceWithMatrix(matrix, piece, {x: 0, y: 5})
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

  gravityWork: function (matrix) {
    return matrix
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
