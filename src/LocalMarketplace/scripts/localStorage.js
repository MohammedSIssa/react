export const loadUser = () => JSON.parse(localStorage.getItem("user")) || null;

export const saveUser = (user) =>
  localStorage.setItem("user", JSON.stringify(user));

export const removeUser = () => localStorage.removeItem("user");
