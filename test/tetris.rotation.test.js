const test = require('ava')

const tetris = require('../lib/tetris')

test('Rotate - I - 1', (t) => {
  const player = {
    matrix: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 1
  }
  t.deepEqual(tetris._rotate(player), playerRotation1)
})

test('Rotate - I - 2', (t) => {
  const player = {
    matrix: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }

  const playerRotation2 = {
    matrix: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 2
  }
  t.deepEqual(tetris._rotate(tetris._rotate(player)), playerRotation2)
})

test('Rotate - I - 3', (t) => {
  const player = {
    matrix: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }

  const playerRotation3 = {
    matrix: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 3
  }
  t.deepEqual(tetris._rotate(tetris._rotate(tetris._rotate(player))), playerRotation3)
})

test('Rotate - I - 4', (t) => {
  const player = {
    matrix: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }

  const playerRotation4 = {
    matrix: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }
  t.deepEqual(tetris._rotate(tetris._rotate(tetris._rotate(tetris._rotate(player)))), playerRotation4)
})

test('Rotate - J - 1', (t) => {
  const player = {
    matrix: [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'J',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [2, 0, 0, 0],
      [2, 2, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'J',
    pieceRotation: 1
  }
  t.deepEqual(tetris._rotate(player), playerRotation1)
})

test('Rotate - J - 2', (t) => {
  const player = {
    matrix: [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'J',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 2, 2, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'J',
    pieceRotation: 2
  }
  t.deepEqual(tetris._rotate(tetris._rotate(player)), playerRotation1)
})

test('Rotate - J - 3', (t) => {
  const player = {
    matrix: [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'J',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 0, 0, 0],
      [2, 2, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'J',
    pieceRotation: 3
  }
  t.deepEqual(tetris._rotate(tetris._rotate(tetris._rotate(player))), playerRotation1)
})

test('Rotate - L - 1', (t) => {
  const player = {
    matrix: [
      [0, 3, 0, 0],
      [0, 3, 0, 0],
      [0, 3, 3, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'L',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 0, 0, 0],
      [3, 3, 3, 0],
      [3, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'L',
    pieceRotation: 1
  }
  t.deepEqual(tetris._rotate(player), playerRotation1)
})

test('Rotate - L - 2', (t) => {
  const player = {
    matrix: [
      [0, 3, 0, 0],
      [0, 3, 0, 0],
      [0, 3, 3, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'L',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [3, 3, 0, 0],
      [0, 3, 0, 0],
      [0, 3, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'L',
    pieceRotation: 2
  }
  t.deepEqual(tetris._rotate(tetris._rotate(player)), playerRotation1)
})

test('Rotate - L - 3', (t) => {
  const player = {
    matrix: [
      [0, 3, 0, 0],
      [0, 3, 0, 0],
      [0, 3, 3, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'L',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 0, 3, 0],
      [3, 3, 3, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'L',
    pieceRotation: 3
  }
  t.deepEqual(tetris._rotate(tetris._rotate(tetris._rotate(player))), playerRotation1)
})

test('Rotate - O', (t) => {
  const player = {
    matrix: [
      [4, 4, 0],
      [4, 4, 0],
      [0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'O',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [4, 4, 0],
      [4, 4, 0],
      [0, 0, 0]
    ],
    piecePos: { x: 0, y: 0 },
    piece: 'O',
    pieceRotation: 1
  }
  t.deepEqual(tetris._rotate(player), playerRotation1)
})

test('Rotate - S - 1', (t) => {
  const player = {
    matrix: [
      [0, 0, 0],
      [0, 5, 5],
      [5, 5, 0],
      [0, 0, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'S',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [5, 0, 0],
      [5, 5, 0],
      [0, 5, 0],
      [0, 0, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'S',
    pieceRotation: 1
  }
  t.deepEqual(tetris._rotate(player), playerRotation1)
})

test('Rotate - T - 1', (t) => {
  const player = {
    matrix: [
      [0, 0, 0],
      [6, 6, 6],
      [0, 6, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'T',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 6, 0],
      [6, 6, 0],
      [0, 6, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'T',
    pieceRotation: 1
  }
  t.deepEqual(tetris._rotate(player), playerRotation1)
})

test('Rotate - T - 2', (t) => {
  const player = {
    matrix: [
      [0, 0, 0],
      [6, 6, 6],
      [0, 6, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'T',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 6, 0],
      [6, 6, 6],
      [0, 0, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'T',
    pieceRotation: 2
  }
  t.deepEqual(tetris._rotate(tetris._rotate(player)), playerRotation1)
})

test('Rotate - T - 3', (t) => {
  const player = {
    matrix: [
      [0, 0, 0],
      [6, 6, 6],
      [0, 6, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'T',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 6, 0],
      [0, 6, 6],
      [0, 6, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'T',
    pieceRotation: 3
  }
  t.deepEqual(tetris._rotate(tetris._rotate(tetris._rotate(player))), playerRotation1)
})

test('Rotate - Z - 1', (t) => {
  const player = {
    matrix: [
      [0, 0, 0],
      [7, 7, 0],
      [0, 7, 7],
      [0, 0, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'Z',
    pieceRotation: 0
  }

  const playerRotation1 = {
    matrix: [
      [0, 7, 0],
      [7, 7, 0],
      [7, 0, 0],
      [0, 0, 0]
    ],
    piecePos: { x: 1, y: 0 },
    piece: 'Z',
    pieceRotation: 1
  }
  t.deepEqual(tetris._rotate(player), playerRotation1)
})

test('Fail Rotate - I - 1 - with other I', (t) => {
  const player = {
    matrix: [
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }
  t.deepEqual(tetris._rotate(player), player)
})

test('Fail Rotate - I - 1 - with other pieces', (t) => {
  const player = {
    matrix: [
      [0, 1, 2, 0],
      [0, 1, 3, 0],
      [0, 1, 4, 0],
      [0, 1, 5, 0]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }
  t.deepEqual(tetris._rotate(player), player)
})

test('Fail Rotate - I - 1 - near border', (t) => {
  const player = {
    matrix: [
      [0, 1],
      [0, 1],
      [0, 1],
      [0, 1]
    ],
    piecePos: { x: 0, y: 1 },
    piece: 'I',
    pieceRotation: 0
  }
  t.deepEqual(tetris._rotate(player), player)
})
