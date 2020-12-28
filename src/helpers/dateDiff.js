import moment from 'moment';

moment.defaultFormat = 'DD.MM.YYYY HH:mm';
moment.locale('ru', {
  months: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  week: {
    dow: 1,
  },
  monthsShort: [
    'янв',
    'февр',
    'март',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сент',
    'окт',
    'нояб',
    'дек',
  ],
  relativeTime: {
    past: '%s назад',
    s: 'секунд',
    m: 'месяц',
    mm: '%d минут',
    h: 'час',
    hh: '%d часов',
    d: 'день',
    dd: '%d дней',
    M: 'месяц',
    MM: '%d месяцев',
    y: 'год',
    yy: '%d лет',
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
