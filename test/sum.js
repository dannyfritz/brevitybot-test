const test = require('tape');
const sum = require("../sum.js")

test('sum', function (t) {
  t.equal(sum(1, 2), 2);
  t.end();
})
test('sum-2', function (t) {
  t.equal(sum(4, -2), 2);
  t.end();
})
test('sum-3', function (t) {
  t.equal(sum(4, 100), 100);
  t.end();
})
test('sum-4', function (t) {
  t.equal(sum(4, 100), 104);
  t.end();
})
