const MS_PER_DAY = 86_400_000;

/**
 * Counts calendar days between two ISO dates (YYYY-MM-DD), both included.
 * Throws if a date is invalid or if the end date is before the start date.
 */
export function countDays(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Style defensif : une date invalide donne NaN, on refuse explicitement.
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    throw new Error('Invalid date');
  }
  if (end < start) {
    throw new Error('End date is before start date');
  }

  return Math.round((end.getTime() - start.getTime()) / MS_PER_DAY) + 1;
}

/**
 * Counts working days (Monday to Friday) between two ISO dates, both included.
 * Public holidays are not taken into account.
 */
export function countWorkingDays(startDate: string, endDate: string): number {
  const total = countDays(startDate, endDate);
  const current = new Date(startDate);
  let workingDays = 0;

  for (let i = 0; i < total; i++) {
    const day = current.getUTCDay(); // 0 = dimanche, 6 = samedi
    if (day !== 0 && day !== 6) {
      workingDays++;
    }
    current.setUTCDate(current.getUTCDate() + 1);
  }

  return workingDays;
}
