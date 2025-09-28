const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList() {
  let newTask = inputEl.value;
  const liEl = document.createElement("li");
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = "";

  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `<i class="fas fa-check-square"></i>`; // fixed closing tag
  liEl.appendChild(checkBtnEl);

  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `<i class="fas fa-trash"></i>`; // fixed closing tag
  liEl.appendChild(trashBtnEl); // fixed wrong variable
}
