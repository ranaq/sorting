describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4])).toEqual([
      [1, 2],
      [3, 4]
    ]);
    expect(split([1, 2, 3, 4, 5])).toEqual([
      [1, 2, 3],
      [4, 5]
    ]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(merge([4, 5, 6], [1, 2, 3])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([4, 5, 6, 7], [1, 2, 3])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(merge([1, 2, 3], [4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(merge([1, 2, 3, 5], [4, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
