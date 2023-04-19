import { Calculator } from './testservice';

describe('testservice', () => {
  it('should add 2 number', () => {
    const service = new Calculator();
    expect(service.add(2, 5)).toBe(7);
  });
  it('should sub 2 number', () => {
    const service = new Calculator();
    expect(service.subtract(10, 5)).toBe(5);
  });
});
