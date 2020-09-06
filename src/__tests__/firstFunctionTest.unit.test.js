const assert = require('assert');
describe ('Math', () => {
  describe('.max', () => {
    it('returns the argument with the highest value', () => {
      const minimum = 1;
      const median = 2;
      const maximum = 3;

      const maxResult = Math.max(minimum, maximum, median);
      assert.ok(maxResult === maximum);
    })

    it('Returns -Infinity when no arguments are provided', () => {
      const negInfinity = Infinity;

      const infResult = Math.max();

      assert.ok(infResult === negInfinity);
    })
  })
}
)
