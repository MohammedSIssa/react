export const saveUser = (data) =>
  localStorage.setItem("user", JSON.stringify(data));

export const loadUser = () => JSON.parse(localStorage.getItem("user")) || {};

export const removeUser = () => localStorage.removeItem("user");
