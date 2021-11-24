import { capacityBadgeBgColor } from './helpers';

describe('helpers', () => {
  describe('capacityBadgeBgColor', () => {
    it('should return "bg-warning"', () => {
      expect(capacityBadgeBgColor(25, 50)).toBe('bg-warning');
    });

    it('should return "bg-danger"', () => {
      expect(capacityBadgeBgColor(50, 50)).toBe('bg-danger');
    });

    it('should return "bg-success"', () => {
      expect(capacityBadgeBgColor(1, 50)).toBe('bg-success');
    });
  });
});
