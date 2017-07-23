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
    return insertPiece(matrix, piece, pos, 0)
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

  move: function (originalPlayer, direction) {
    return move(originalPlayer, newPos(originalPlayer.piecePos, direction))
  },

  collision: function (player, direction, remove = true) {
    let matrix = player.matrix
    if (remove) {
      matrix = removePiece(player.matrix, player.piece, player.piecePos, player.pieceRotation)
    }
    let collide = false
    runFnAtPiece(matrix, player.piece, newPos(player.piecePos, direction), player.pieceRotation, (matrix, x, y) => { collide = collide || matrix[x] === undefined || matrix[x][y] === undefined || matrix[x][y] })
    return !!collide
  },

  rotate: function (originalPlayer) {
    let player = copy(originalPlayer)
    player.pieceRotation = player.pieceRotation === 3 ? 0 : player.pieceRotation + 1
    player.matrix = removePiece(player.matrix, player.piece, player.piecePos, originalPlayer.pieceRotation)
    player.matrix = insertPiece(player.matrix, player.piece, player.piecePos, player.pieceRotation)
    return player
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

function changePiece (originalMatrix, piece, pos, idFunction, rotation) {
  let id = idFunction(piece)
  return runFnAtPiece(originalMatrix, piece, pos, rotation, (matrix, x, y) => { if (matrix[x] && matrix[x][y] !== undefined) { matrix[x][y] = id } })
}

function runFnAtPiece (originalMatrix, piece, pos, rotation, runFunction) {
  var matrix = copy(originalMatrix)
  switch (piece) {
    case 'I':
      if (rotation % 2) {
        runFunction(matrix, pos.x + 1, pos.y - 1)
        runFunction(matrix, pos.x + 1, pos.y)
        runFunction(matrix, pos.x + 1, pos.y + 1)
        runFunction(matrix, pos.x + 1, pos.y + 2)
      } else {
        runFunction(matrix, pos.x, pos.y)
        runFunction(matrix, pos.x + 1, pos.y)
        runFunction(matrix, pos.x + 2, pos.y)
        runFunction(matrix, pos.x + 3, pos.y)
      }
      break
    case 'J':
      if (rotation % 2) {
        runFunction(matrix, pos.x + 1, pos.y)
        runFunction(matrix, pos.x + 1, pos.y + 1)
        runFunction(matrix, pos.x + 1, pos.y + 2)
        if (rotation === 1) {
          runFunction(matrix, pos.x, pos.y)
        } else {
          runFunction(matrix, pos.x + 2, pos.y + 2)
        }
      } else {
        runFunction(matrix, pos.x, pos.y + 1)
        runFunction(matrix, pos.x + 1, pos.y + 1)
        runFunction(matrix, pos.x + 2, pos.y + 1)
        if (rotation === 0) {
          runFunction(matrix, pos.x + 2, pos.y)
        } else {
          runFunction(matrix, pos.x, pos.y + 2)
        }
      }
      break
    case 'L':
      if (rotation % 2) {
        runFunction(matrix, pos.x + 1, pos.y - 1)
        runFunction(matrix, pos.x + 1, pos.y)
        runFunction(matrix, pos.x + 1, pos.y + 1)
        if (rotation === 1) {
          runFunction(matrix, pos.x + 2, pos.y - 1)
        } else {
          runFunction(matrix, pos.x, pos.y + 1)
        }
      } else {
        runFunction(matrix, pos.x, pos.y)
        runFunction(matrix, pos.x + 1, pos.y)
        runFunction(matrix, pos.x + 2, pos.y)
        if (rotation === 0) {
          runFunction(matrix, pos.x + 2, pos.y + 1)
        } else {
          runFunction(matrix, pos.x, pos.y - 1)
        }
      }
      break
    case 'O':
      runFunction(matrix, pos.x, pos.y)
      runFunction(matrix, pos.x + 1, pos.y)
      runFunction(matrix, pos.x, pos.y + 1)
      runFunction(matrix, pos.x + 1, pos.y + 1)
      break
    case 'S':
      if (rotation % 2) {
        runFunction(matrix, pos.x - 1, pos.y)
        runFunction(matrix, pos.x, pos.y)
        runFunction(matrix, pos.x, pos.y + 1)
        runFunction(matrix, pos.x + 1, pos.y + 1)
      } else {
        runFunction(matrix, pos.x, pos.y + 1)
        runFunction(matrix, pos.x, pos.y + 2)
        runFunction(matrix, pos.x + 1, pos.y + 1)
        runFunction(matrix, pos.x + 1, pos.y)
      }
      break
    case 'T':
      if (rotation % 2) {
        runFunction(matrix, pos.x, pos.y + 1)
        runFunction(matrix, pos.x + 1, pos.y + 1)
        runFunction(matrix, pos.x - 1, pos.y + 1)
        if (rotation === 1) {
          runFunction(matrix, pos.x, pos.y)
        } else {
          runFunction(matrix, pos.x, pos.y + 2)
        }
      } else {
        runFunction(matrix, pos.x, pos.y + 1)
        runFunction(matrix, pos.x, pos.y + 2)
        runFunction(matrix, pos.x, pos.y)
        if (rotation === 0) {
          runFunction(matrix, pos.x + 1, pos.y + 1)
        } else {
          runFunction(matrix, pos.x - 1, pos.y + 1)
        }
      }
      break
    case 'Z':
      if (rotation % 2) {
        runFunction(matrix, pos.x - 1, pos.y + 1)
        runFunction(matrix, pos.x, pos.y + 1)
        runFunction(matrix, pos.x, pos.y)
        runFunction(matrix, pos.x + 1, pos.y)
      } else {
        runFunction(matrix, pos.x, pos.y)
        runFunction(matrix, pos.x, pos.y + 1)
        runFunction(matrix, pos.x + 1, pos.y + 1)
        runFunction(matrix, pos.x + 1, pos.y + 2)
      }
      break
  }
  return matrix
}

function insertPiece (originalMatrix, piece, pos, rotation) {
  return changePiece(originalMatrix, piece, pos, pieceId, rotation)
}

function removePiece (originalMatrix, piece, pos, rotation) {
  return changePiece(originalMatrix, piece, pos, () => 0, rotation)
}

function copy (object) {
  return JSON.parse(JSON.stringify(object))
}

function move (originalPlayer, newPos) {
  let player = copy(originalPlayer)
  player.piecePos = newPos
  player.matrix = removePiece(player.matrix, player.piece, originalPlayer.piecePos, player.pieceRotation)
  player.matrix = insertPiece(player.matrix, player.piece, player.piecePos, player.pieceRotation)
  return player
}

function newPos (pos, direction) {
  return {x: pos.x + xDiff(direction), y: pos.y + yDiff(direction)}

  function xDiff (direction) { return direction === 'D' ? 1 : 0 }
  function yDiff (direction) { return (direction === 'R' ? 1 : 0) - (direction === 'L' ? 1 : 0) }
}
