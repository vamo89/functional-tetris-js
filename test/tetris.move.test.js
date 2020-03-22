const test = require('ava')

const tetris = require('../lib/tetris')

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
