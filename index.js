const tetris = require('./lib/tetris.js')

// Constants

const maxWidth = 12
const maxHeight = 20
const ctx = initCanvas('tetris-canvas')

const nextPieceMaxWidth = 3
const nextPieceMaxHeight = 4
const nextPieceCtx = initCanvas('tetris-nextPiece-canvas')

// Init

let state
init()

function init (restart = false, state) {
  drawButton(restart)
  bindStartGame()

  function drawButton (restart) {
    ctx.fillStyle = 'green'
    ctx.fillRect(1, 7, 10, 4)
    ctx.fillStyle = 'black'
    ctx.font = '3px times'
    if (restart) {
      ctx.fillText('Restart', 2, 10)
    } else {
      ctx.fillText('Start', 3, 10)
    }
  }
}
function bindStartGame () {
  ctx.canvas.addEventListener('click', startGame)
}
function unbindStartGame () {
  ctx.canvas.removeEventListener('click', startGame)
}
function initCanvas (canvasId) {
  const ctx = document.getElementById(canvasId).getContext('2d')
  ctx.scale(20, 20)
  ctx.font = '1px times'
  return ctx
}

// User Interaction

function doUserEventAndRedraw (event) {
  state = tetris.userEvent(state, event.code)
  redraw(ctx, state)
}
function bindUserEvents () {
  document.addEventListener('keydown', doUserEventAndRedraw)
}
function unbindUserEvents () {
  document.removeEventListener('keydown', doUserEventAndRedraw)
}

// Game loop

function startGame () {
  const randomSeed = +new Date()
  state = tetris.initalState(maxWidth, maxHeight, randomSeed)
  unbindStartGame()
  bindUserEvents()
  loop()
}
function loop (time = 0) {
  state = tetris.tick(state, time)
  redraw(ctx, state)
  if (state.continue) {
    window.requestAnimationFrame(loop)
  } else {
    unbindUserEvents()
    init(true, state)
  }
}
function redraw (ctx, state) {
  ctx.clearRect(0, 0, maxWidth, maxHeight)
  draw(ctx, state.player.matrix)
  drawPoints(ctx, state.player.points)

  nextPieceCtx.clearRect(0, 0, nextPieceMaxWidth, nextPieceMaxHeight)
  drawNextPiece(nextPieceCtx, state.player.nextPiece)

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
  function drawNextPiece (ctx, piece) {
    ctx.fillStyle = 'black'
    ctx.font = '3px times'
    ctx.fillText(piece, 1, 3)
  }
  function drawPoints (ctx, playerPoints) {
    ctx.fillStyle = 'black'
    ctx.font = '1px times'
    ctx.fillText('Points: ' + playerPoints, 0, maxHeight)
  }
}

// Aux

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
