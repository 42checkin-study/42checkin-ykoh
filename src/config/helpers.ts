export function capacityBadgeBgColor(capacity: number, max: number) {
  const percent: number = capacity / max;

  let bgColor: string = 'bg-warning';

  if (percent > 2 / 3) {
    bgColor = 'bg-danger';
  } else if (percent < 1 / 3) {
    bgColor = 'bg-success';
  }

  return bgColor;
}
