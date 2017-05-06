const test = require('ava')
const tetris = require('../lib/tetris')

test('Tetris!', (t) => {
  t.is(tetris(), 'Tetris!')
})
