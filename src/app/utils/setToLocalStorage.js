export function setToLS(data) {
  localStorage.setItem("todos", JSON.stringify(data));
}
