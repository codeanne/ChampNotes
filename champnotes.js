(function () {
  //accessing elements
  const form = document.getElementById("todo-form");
  const list = document.getElementById("todo-ul");
  const input = document.getElementById("todo-input");

  //clears input on focus
  input.onfocus = function () {
    this.value = "";
  };

  // event listeners to add task and remove task
  form.addEventListener("submit", newTask);
  list.addEventListener("click", removeTask);

  //add task function

  function newTask(e) {
    e.preventDefault(); //prevent list refresh

    const input = document.getElementById("todo-input").value;

    //create list item
    const item = document.createElement("li");
    item.className = "list-group-item";

    //create text node
    const inputTask = document.createTextNode(input);

    //appending new task to list
    item.appendChild(inputTask);

    //trash can icon
    const rubbish = document.createElement("i");
    rubbish.className = "fas fa-trash-alt";

    const remove = document.createElement("button");
    remove.appendChild(rubbish);

    //adding trash can icon
    item.appendChild(rubbish);

    //add new item to list
    list.appendChild(item);
  }

  //remove item function
  function removeTask(e) {
    if (e.target.classList.contains("fas")) {
      //trash icon is the only class name that includes fas
      e.target.parentElement.remove();
    }
  }
})();
