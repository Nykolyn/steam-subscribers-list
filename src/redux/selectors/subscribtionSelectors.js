export const subsSelector = state => state.subscribtions.subs;
export const subsLoadSelector = state => state.subscribtions.loading.getSubs;
export const addSubLoadSelector = state => state.subscribtions.loading.addSub;
export const updateFavSubLoadSelector = state =>
  state.subscribtions.loading.updateFavSub;

export const isSameDaySelector = state => state.subscribtions.date.sameDayAdded;
export const isSameWeekSelector = state =>
  state.subscribtions.date.sameWeekAdded;
export const isSameMonthSelector = state =>
  state.subscribtions.date.sameMonthAdded;
export const lastYearSelector = state => state.subscribtions.date.lastYearAdded;
