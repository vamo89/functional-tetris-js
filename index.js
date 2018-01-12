const tetris = require('./lib/tetris.js')

const maxWidth = 12
const maxHeight = 20
const randomSeed = +new Date()
const ctx = initCanvas('tetris-canvas')
let state = tetris.initalState(maxWidth, maxHeight, randomSeed)
bindUserEvents()
loop()

function initCanvas (canvasId) {
  const ctx = document.getElementById(canvasId).getContext('2d')
  ctx.scale(20, 20)
  ctx.font = '1px times'
  return ctx
}
function bindUserEvents () {
  document.addEventListener('keydown', function (event) {
    state = tetris.userEvent(state, event.code)
    redraw(ctx, state)
  })
}
function loop (time = 0) {
  state = tetris.tick(state, time)
  redraw(ctx, state)
  if (state.continue) {
    window.requestAnimationFrame(loop)
  }
}
function redraw (ctx, state) {
  ctx.clearRect(0, 0, maxWidth, maxHeight)
  draw(ctx, state.player.matrix)
  drawPoints(ctx, state.player.points)

  function draw (ctx, matrix) {
    matrix.forEach((row, y) =>
      row.forEach((value, x) => {
        if (value) {
          ctx.fillStyle = colors()[value]
          ctx.fillRect(x, y, 1, 1)
        }
      })
    )
  }
  function drawPoints (ctx, playerPoints) {
    ctx.fillStyle = 'black'
    ctx.fillText('Points: ' + playerPoints, 0, maxHeight)
  }
}
function colors () {
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
}
