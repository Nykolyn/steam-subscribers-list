export const setToLS = (name, data) => {
  const parsed = JSON.stringify(data);
  return localStorage.setItem(name, parsed);
};
export const clearFromLS = name => localStorage.removeItem(name);
export const getFromLS = name => JSON.parse(localStorage.getItem(name));
