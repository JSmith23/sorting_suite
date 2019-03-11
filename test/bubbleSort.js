const assert = require('assert');
const bubbleSort = require('../lib/bubbleSort');
const measure = require('./measure');

describe('Bubble Sort', function () {
  it('should sort numbers', function () {
    assert.deepEqual(bubbleSort([6,2,3,7,5,4,1]), [1,2,3,4,5,6,7]);
  });

  it('not fail on different sizes of inputs', function () {
    this.timeout(60000);
    const batchSmall = require('./fixtures/small.json');
    const batch1000 = require('./fixtures/1000.json');
    const batch10000 = require('./fixtures/10000.json');
    const batch100000 = require('./fixtures/100000.json');
    console.info('*******************************************');
    measure('bubble sort(small)', () => { bubbleSort(batchSmall) });
    measure('bubble sort(1000)', () => { bubbleSort(batch1000) });
    measure('bubble sort(10000)', () => { bubbleSort(batch10000) });
    measure('bubble sort(100000)', () => { bubbleSort(batch100000) });
    // NOTE: next one are too big for bubble sort
    console.info('*******************************************');
  });
});
