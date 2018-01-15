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

When you make any change, it should reflect on the browser (hot-reload).
Also, it keeps running lint at every js change.
- Should run tests too (easier to do TDD)

## Know Bugs

- Objects get stuck at border when rotated
- Possible to continue playing with one more piece after end - press down and side arrows
- Weird interaction if rotate near placement (not sure how, need testing)

## Improvements

- For user experience
  - Increase dropInterval
  - Show next piece
  - Add start button
  - Add restart button / show end game
  - Highscore (local storage)
  - Responsive
  - Nice interface
- Code related
  - Run tests when edit files
    - Change to mocha / mocha-loader