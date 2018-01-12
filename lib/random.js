module.exports = {
  init: init,
  next: next
}
let _seed = 0
function init (seed) {
  _seed = seed
}
function next (optMin, optMax) {
  _seed = _seed * 16807 % 2147483647
  return _seed % (optMax - optMin) + optMin
}
