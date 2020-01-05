import moment from 'moment';

moment.defaultFormat = 'DD.MM.YYYY HH:mm';
moment.updateLocale('en', {
  week: {
    dow: 1,
  },
});

const compareMonths = (date1, date2) => {
  return (
    date1
      .split('.')
      .slice(1)
      .join(' ') ===
    date2
      .split('.')
      .slice(1)
      .join(' ')
  );
};

export const isSameDay = (date1, date2) => {
  const firstDate = moment(date1, moment.defaultFormat);
  const secondDate = moment(date2, moment.defaultFormat);

  return firstDate.isSame(secondDate, 'day');
};

export const isSameWeek = (date1, date2) => {
  const firstDate = moment(date1, moment.defaultFormat);
  const secondDate = moment(date2, moment.defaultFormat);

  return firstDate.isSame(secondDate, 'week');
};

export const isSameYear = (date1, date2) => {
  const firstDate = moment(date1, moment.defaultFormat);
  const secondDate = moment(date2, moment.defaultFormat);

  return firstDate.isSame(secondDate, 'year');
};

export const isSameMonth = (date1, date2) => {
  return compareMonths(date1, date2);
};

export const timeAgo = date => moment(date, moment.defaultFormat).fromNow();
