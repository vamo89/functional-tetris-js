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
    return insertPiece(matrix, piece, pos)
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

  gravity: function (originalPlayer) {
    return move(originalPlayer, {x: originalPlayer.piecePos.x + 1, y: originalPlayer.piecePos.y})
  },

  collision: function (player, newPos, remove = true) {
    let matrix = player.matrix
    if (remove) {
      matrix = removePiece(player.matrix, player.piece, player.piecePos)
    }
    let collide = false
    runFnAtPiece(matrix, player.piece, newPos, (matrix, x, y) => { collide = collide || matrix[x] === undefined || matrix[x][y] })
    return !!collide
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

function changePiece (originalMatrix, piece, pos, idFunction) {
  let id = idFunction(piece)
  return runFnAtPiece(originalMatrix, piece, pos, (matrix, x, y) => { if (matrix[x] && matrix[x][y] !== undefined) { matrix[x][y] = id } })
}

function runFnAtPiece (originalMatrix, piece, pos, runFunction) {
  var matrix = JSON.parse(JSON.stringify(originalMatrix))
  switch (piece) {
    case 'I':
      runFunction(matrix, pos.x, pos.y)
      runFunction(matrix, pos.x + 1, pos.y)
      runFunction(matrix, pos.x + 2, pos.y)
      runFunction(matrix, pos.x + 3, pos.y)
      break
    case 'J':
      runFunction(matrix, pos.x, pos.y + 1)
      runFunction(matrix, pos.x + 1, pos.y + 1)
      runFunction(matrix, pos.x + 2, pos.y + 1)
      runFunction(matrix, pos.x + 2, pos.y)
      break
    case 'L':
      runFunction(matrix, pos.x, pos.y)
      runFunction(matrix, pos.x + 1, pos.y)
      runFunction(matrix, pos.x + 2, pos.y)
      runFunction(matrix, pos.x + 2, pos.y + 1)
      break
    case 'O':
      runFunction(matrix, pos.x, pos.y)
      runFunction(matrix, pos.x + 1, pos.y)
      runFunction(matrix, pos.x, pos.y + 1)
      runFunction(matrix, pos.x + 1, pos.y + 1)
      break
    case 'S':
      runFunction(matrix, pos.x, pos.y + 1)
      runFunction(matrix, pos.x, pos.y + 2)
      runFunction(matrix, pos.x + 1, pos.y + 1)
      runFunction(matrix, pos.x + 1, pos.y)
      break
    case 'T':
      runFunction(matrix, pos.x, pos.y)
      runFunction(matrix, pos.x, pos.y + 1)
      runFunction(matrix, pos.x, pos.y + 2)
      runFunction(matrix, pos.x + 1, pos.y + 1)
      break
    case 'Z':
      runFunction(matrix, pos.x, pos.y)
      runFunction(matrix, pos.x, pos.y + 1)
      runFunction(matrix, pos.x + 1, pos.y + 1)
      runFunction(matrix, pos.x + 1, pos.y + 2)
      break
  }
  return matrix
}

function insertPiece (originalMatrix, piece, pos) {
  return changePiece(originalMatrix, piece, pos, pieceId)
}

function removePiece (originalMatrix, piece, pos) {
  return changePiece(originalMatrix, piece, pos, () => 0)
}

function move (originalPlayer, newPos) {
  let player = JSON.parse(JSON.stringify(originalPlayer))
  player.piecePos = newPos
  player.matrix = removePiece(player.matrix, player.piece, originalPlayer.piecePos)
  player.matrix = insertPiece(player.matrix, player.piece, player.piecePos)
  return player
}
