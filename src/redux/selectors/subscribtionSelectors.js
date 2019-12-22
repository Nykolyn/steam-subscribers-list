export const subsSelector = state => state.subscribtions.subs;
export const subsLoadSelector = state => state.subscribtions.loading.getSubs;
export const addSubLoadSelector = state => state.subscribtions.loading.addSub;
export const updateFavSubLoadSelector = state =>
  state.subscribtions.loading.updateFavSub;
