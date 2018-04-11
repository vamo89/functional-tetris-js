# [WIP] Functional Tetris JS

A small project to test some functional js

## How to play

https://vamo89.github.io/functional-tetris-js/

## How to run
Install npm:
`sudo apt-get install npm -y`

Clone project and get into folder:
`git clone https://github.com/vamo89/functional-tetris-js && cd functional-tetris-js`

Download npm dependencies:
`npm install`

Now, you are ready to run it:
`npm run dev`

When you make any change, it should reflect on the browser (hot-reload).
Also, it keeps running lint at every js change.

If you want to run tests, open in another terminal:
`npm run watch:test`

This is the easier way to do TDD, which I recommend doing for this project.

#### Improvements

- For user experience
  - Increase dropInterval
  - Show next piece
  - Highscore (local storage)
  - Responsive
  - Nice interface
  - Pause
    - On space
    - On focus lost
  - Start/restart on space
  - In rotation, when there is space, piece should move 1 or 2 tiles sideways to fit (check exactly what happens in original tetris)
- Tests
  - More tests for failed rotation
