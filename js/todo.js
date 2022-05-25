const todoForm = document.querySelector("form#todoForm");
const todoList = document.querySelector("ul#todoList");
const todoItem = document.querySelector("ul#todoList > li");
const todoInput = document.querySelector("form#todoForm > input");
const TODO_KEY = "todoArray";
let newTodo = {};

let todoArray = [];

const removeTodo = (e) => {
  e.target.parentElement.style.textDecoration = "line-through";
  e.target.parentElement.style.textDecorationColor = "red";
  e.target.parentElement.style.textDecorationThickness = "4px";    

  // 체크 여부 가시성을 위한 이벤트 지연 처리
  setTimeout(() => {
    e.target.parentElement.remove();
  }, 500);

  // filter 함수 -> 배열의 각 원소에 접근, 각 원소마다 조건문을 검사하는데 참일 경우에만 해당 원소 통과
  todoArray = todoArray.filter(
    (item) => parseInt(e.target.parentElement.id) !== item.id
  );

  localStorage.setItem(TODO_KEY, JSON.stringify(todoArray));
};

const addTodo = (newTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("input");

  li.id = newTodo.id;
  span.innerText = newTodo.text;
  deleteBtn.type = "checkbox";
  deleteBtn.addEventListener("click", removeTodo);

  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
};

const onsubmit = (e) => {
  e.preventDefault();

  if (
    todoInput.value.includes("death") ||
    todoInput.value.includes("die") ||
    todoInput.value.includes("give up") ||
    todoInput.value.includes("giveup")
  ) {
    newTodo = {
      text: "Do or Die",
      id: Date.now(),
    };
  } else if (todoInput.value.length >= 100) {
    newTodo = {
      text: "Don't be cheeky",
      id: Date.now(),
    };
  } else {
    newTodo = {
      text: todoInput.value,
      id: Date.now(),
    };
  }

  todoArray.push(newTodo);
  todoInput.value = "";
  // 사용자가 입력한 값을 브라우저에 출력, but 새로고침하면 사라짐
  addTodo(newTodo);

  localStorage.setItem(TODO_KEY, JSON.stringify(todoArray));
};

todoForm.addEventListener("submit", onsubmit);

const savedTodo = localStorage.getItem(TODO_KEY);

if (savedTodo !== null) {
  // 새로고침 후에도 todo 목록을 보여주도록 하기 위해서 localStrage의 데이터 가져오서 브라우저에 출력
  const parsedTodo = JSON.parse(savedTodo);
  // 기존의 데이터로 배열 초기화 작업
  todoArray = parsedTodo;
  // addTodo를 호출하는 시점에서 todoArray는 빈 배열이 아니라 기존의 데이터를 가지고 있는 상태
  todoArray.forEach((item) => {
    addTodo(item);
  });
}
