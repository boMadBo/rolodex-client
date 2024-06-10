import dayjs from 'dayjs';

export const calculateYear = (date: Date | undefined) => {
  const currentDate = dayjs();
  const newDate = dayjs(date);
  return currentDate.diff(newDate, 'year');
};
