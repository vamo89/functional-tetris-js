const test = require('ava')

const tetris = require('../lib/tetris')

test('Collision - Simple Test - False', (t) => {
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

  t.false(tetris._collision(player, 'D'))
})

test('Collision - Simple Test - True', (t) => {
  const player = {
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

  t.true(tetris._collision(player, 'D'))
})

test('Collision - With another piece - True', (t) => {
  const player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [2, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  t.true(tetris._collision(player, 'D'))
})

test('Collision - With another piece - False', (t) => {
  const player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [0, 2]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  t.false(tetris._collision(player, 'D'))
})

test('Collision - Lateral - False', (t) => {
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

  t.false(tetris._collision(player, 'R'))
})

test('Collision - Lateral - True', (t) => {
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

  t.true(tetris._collision(player, 'L'))
})

test('Collision - Lateral with another piece - False', (t) => {
  const player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [0, 2]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  t.false(tetris._collision(player, 'R'))
})

test('Collision - Lateral with another piece - True', (t) => {
  const player = {
    matrix: [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 2],
      [0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'I'
  }

  t.true(tetris._collision(player, 'R'))
})
