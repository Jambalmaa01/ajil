import dayjs from 'dayjs';

export function getDateRange() {
  const today = dayjs();
  const hours = today.get('hours');

  let startDate = '';
  let endDate = '';

  if (hours < 20) {
    startDate = dayjs().subtract(1, 'day').format('YYYY-MM-DDT20:01');
    endDate = dayjs().format('YYYY-MM-DDT20:00');
  } else {
    startDate = dayjs().format('YYYY-MM-DDT20:01');
    endDate = dayjs().add(1, 'day').format('YYYY-MM-DDT20:00');
  }

  return [startDate, endDate];
}
