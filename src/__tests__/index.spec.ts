import exampleMethod from '../index';

describe('index', () => {
  it('should multiply by 2', () => {
    expect(exampleMethod(4)).toBe(8);
  });
});
