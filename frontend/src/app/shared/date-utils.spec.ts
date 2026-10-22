import { countDays, countWorkingDays } from './date-utils';

describe('countDays', () => {
  it('counts both the start and the end date', () => {
    expect(countDays('2026-10-26', '2026-10-30')).toBe(5);
  });

  it('returns 1 for a single day', () => {
    expect(countDays('2026-10-30', '2026-10-30')).toBe(1);
  });

  it('works across a month change', () => {
    expect(countDays('2026-10-30', '2026-11-02')).toBe(4);
  });

  it('throws when the end date is before the start date', () => {
    expect(() => countDays('2026-10-30', '2026-10-26')).toThrow();
  });

  it('throws when a date is invalid', () => {
    expect(() => countDays('pas une date', '2026-10-26')).toThrow();
  });
});

describe('countWorkingDays', () => {
  it('ignores the weekend', () => {
    // Du vendredi 30 octobre au lundi 2 novembre 2026 : 2 jours ouvres.
    expect(countWorkingDays('2026-10-30', '2026-11-02')).toBe(2);
  });

  it('counts a full week as 5 days', () => {
    expect(countWorkingDays('2026-10-26', '2026-11-01')).toBe(5);
  });
});
