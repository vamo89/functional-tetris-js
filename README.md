# [WIP] Functional Tetris JS

A small project to test some functional js

## How to run
Install npm:
sudo apt-get install npm -y

Clone project and get into folder:
git clone https://github.com/vamo89/functional-tetris-js && cd functional-tetris-js

Download npm dependencies:
npm install

Now, you are ready to run it:
npm run dev

You can open your index.html, and make changes in the files.
When you make any change, it should reflect on the browser (after refresh).
Also, it keeps running tests (easier to do TDD) and lint at every js change.

## Know Bugs

- At the first time running, you have to edit one js, so the bundle.js will be generated.
- Objects get stuck at border when rotated

## Improvements

- For user experience
  - Increase dropInterval
  - Show next piece
  - Add start button
  - Add restart button / show end game
  - Highscore (local storage)
  - Responsive
  - Nice interface
