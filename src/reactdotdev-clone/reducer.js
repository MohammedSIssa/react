export function reducer(state, action) {
  switch (action.type) {
    case "toggle_theme":
      return { theme: state.theme === "light" ? "dark" : "light" };
  }
}
