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

  createPieceWithMatrix: function (originalMatrix) {
    return function (piece, x, y) {
      var matrix = JSON.parse(JSON.stringify(originalMatrix))
      switch (piece) {
        case 'I':
          matrix[x][y] = 1
          matrix[x + 1][y] = 1
          matrix[x + 2][y] = 1
          matrix[x + 3][y] = 1
          break
        case 'J':
          matrix[x][y + 1] = 2
          matrix[x + 1][y + 1] = 2
          matrix[x + 2][y + 1] = 2
          matrix[x + 2][y] = 2
          break
        case 'L':
          matrix[x][y] = 3
          matrix[x + 1][y] = 3
          matrix[x + 2][y] = 3
          matrix[x + 2][y + 1] = 3
          break
        case 'O':
          matrix[x][y] = 4
          matrix[x + 1][y] = 4
          matrix[x][y + 1] = 4
          matrix[x + 1][y + 1] = 4
          break
        case 'S':
          matrix[x][y + 1] = 5
          matrix[x][y + 2] = 5
          matrix[x + 1][y + 1] = 5
          matrix[x + 1][y] = 5
          break
        case 'T':
          matrix[x][y] = 6
          matrix[x][y + 1] = 6
          matrix[x][y + 2] = 6
          matrix[x + 1][y + 1] = 6
          break
        case 'Z':
          matrix[x][y] = 7
          matrix[x][y + 1] = 7
          matrix[x + 1][y + 1] = 7
          matrix[x + 1][y + 2] = 7
          break
      }
      return matrix
    }
  },

  createNewPiece: function (matrix, piece) {
    const xDefaultNewPiece = 0
    const yDefaultNewPiece = 5
    return this.createPieceWithMatrix(matrix)(piece, xDefaultNewPiece, yDefaultNewPiece)
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
