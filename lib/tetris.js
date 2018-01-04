module.exports = {
  initalState: initalState,
  userEvent: userEvent,
  tick: tick,

  // private (being exported for testing)
  rotate: rotate,
  clearMatrix: clearMatrix,
  removeCompleteLines: removeCompleteLines,
  calculatePointsForLineCompletion: calculatePointsForLineCompletion,
  checkLineComplete: checkLineComplete,
  createNewPiece: createNewPiece,
  move: move,
  collision: collision
}
function initalState (maxWidth, maxHeight) {
  return {
    continue: true,
    player: {
      matrix: clearMatrix(maxWidth, maxHeight),
      points: 0,
      piecePos: {x: 0, y: 5},
      piece: randomPiece(),
      pieceRotation: 0
    },
    timeControl: {
      dropInterval: 200,
      lastDrop: 0
    }
  }
}
function clearMatrix (width = 12, height = 20) {
  return Array.from(Array(height), () => Array.from(Array(width), () => 0))
}
function userEvent (state, eventCode) {
  if (eventCode === 'ArrowUp') {
    state.player = rotate(state.player)
  } else {
    let moveDirection = {ArrowLeft: 'L', ArrowRight: 'R', ArrowDown: 'D'}[eventCode]
    if (!collision(state.player, moveDirection)) {
      state.player = move(state.player, moveDirection)
    }
  }
  return state
}
function rotate (originalPlayer) {
  let player = copy(originalPlayer)
  player.pieceRotation = player.pieceRotation === 3 ? 0 : player.pieceRotation + 1
  player.matrix = removePiece(player.matrix, player.piece, player.piecePos, originalPlayer.pieceRotation)
  player.matrix = insertPiece(player.matrix, player.piece, player.piecePos, player.pieceRotation)
  return player
}
function tick (state, time) {
  let newState = copy(state)
  if (time - state.timeControl.lastDrop <= state.timeControl.dropInterval) {
    return newState
  }
  newState.timeControl.lastDrop = time
  if (collision(newState.player, 'D')) {
    if (checkLineComplete(newState.player.matrix)) {
      let roundPoints = calculatePointsForLineCompletion(newState.player.matrix)
      if (roundPoints === undefined) {
        // Cheating Detected
        console.log('roundPoints undefined')
        newState.continue = false
        return newState
      }
      newState.player.points += roundPoints
      newState.player.matrix = removeCompleteLines(newState.player.matrix)
    }
    newState.player.piecePos = {x: 0, y: 5}
    newState.player.piece = randomPiece()
    newState.player.pieceRotation = 0
    if (collision(newState.player, '', false)) {
      // End Game
      console.log('END GAME')
      newState.continue = false
      return newState
    }
    newState.player.matrix = createNewPiece(newState.player.matrix, newState.player.piece)
  } else {
    newState.player = move(newState.player, 'D')
  }
  return newState
}
function checkLineComplete (matrix) {
  return matrix.some(row => filled(row))
}
function calculatePointsForLineCompletion (matrix) {
  return pointsPerLineCompleted()[numberOfFilledLines(matrix)]
}
function removeCompleteLines (originalMatrix) {
  let m = originalMatrix.filter(row => !filled(row))
  while (m.length < originalMatrix.length) {
    m.unshift(clearRow(originalMatrix[0].length))
  }
  return m
}
function createNewPiece (matrix, piece, pos = {x: 0, y: 5}) {
  return insertPiece(matrix, piece, pos, 0)
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
  return runFnAtPiece(originalMatrix, piece, pos, rotation, (matrix, x, y) => {
    if (matrix[x] && matrix[x][y] !== undefined) {
      matrix[x][y] = id
    }
  })
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
function newPos (pos, direction) {
  return {x: pos.x + xDiff(direction), y: pos.y + yDiff(direction)}

  function xDiff (direction) { return direction === 'D' ? 1 : 0 }
  function yDiff (direction) { return (direction === 'R' ? 1 : 0) - (direction === 'L' ? 1 : 0) }
}
function randomPiece () {
  return ['I', 'J', 'L', 'O', 'S', 'T', 'Z'][Math.floor(Math.random() * 7)]
}
function collision (player, direction, remove = true) {
  let matrix = player.matrix
  if (remove) {
    matrix = removePiece(player.matrix, player.piece, player.piecePos, player.pieceRotation)
  }
  let collide = false
  runFnAtPiece(matrix, player.piece, newPos(player.piecePos, direction), player.pieceRotation, (matrix, x, y) => {
    collide = collide || matrix[x] === undefined || matrix[x][y] === undefined || matrix[x][y]
  })
  return !!collide
}
function move (originalPlayer, direction) {
  return moveToPosition(originalPlayer, newPos(originalPlayer.piecePos, direction))

  function moveToPosition (originalPlayer, newPos) {
    let player = copy(originalPlayer)
    player.piecePos = newPos
    player.matrix = removePiece(player.matrix, player.piece, originalPlayer.piecePos, player.pieceRotation)
    player.matrix = insertPiece(player.matrix, player.piece, player.piecePos, player.pieceRotation)
    return player
  }
}
function copy (object) {
  return JSON.parse(JSON.stringify(object))
}
