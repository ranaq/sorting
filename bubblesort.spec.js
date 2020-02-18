describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
});

describe('Bubble Sort', function() {
  it('handles an array of length one', function() {
    expect(bubbleSort([2])).toEqual([2]);
  });
});

describe('Bubble Sort', function() {
  it('handles an array of length > 1', function() {
    expect(bubbleSort([5, 2, 4])).toEqual([2, 4, 5]);
  });
});

describe('Bubble Sort', function() {
  it('handles an array that has duplicate values', function() {
    expect(bubbleSort([4, 3, 4])).toEqual([3, 4, 4]);
  });
});
