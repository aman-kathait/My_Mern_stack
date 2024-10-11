const btn = document.querySelector(".btn");
const deletebtn = document.getElementById("#deletebtn");
const container = document.querySelector(".container");
const taskbox = document.querySelector(".taskbox");
const tasks = document.querySelector(".tasks");
const myinput = document.querySelector(".myinput");
let editTodo = null;
//let dataarray=[];
function addtask() {
  const userinput = myinput.value;
  if (userinput === "") {
    return;
  }
  //console.log(userinput);

  if (btn.innerHTML === "Edit") {
    editlocaltodo(editTodo.target.previousElementSibling.innerHTML);

    editTodo.target.previousElementSibling.innerHTML = userinput;
  
    btn.innerHTML = "Add Task";
    myinput.value = "";
    btn.style.backgroundColor = "#f5422e";
  } else {
    const node = document.createElement("li");
    const p = document.createElement("p");
    node.appendChild(p);
    p.innerHTML = userinput;
    tasks.appendChild(node);
    myinput.value = "";

    //edit button
    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.id = "editbtn";
    node.appendChild(editbtn);

    //delete button
    const dltbutton = document.createElement("button");
    dltbutton.textContent = "Delete";
    dltbutton.id = "deletebtn";
    node.appendChild(dltbutton);
    savetasks(userinput);
  }
}
function savetasks(input) {
  //let tasksave=JSON.stringify(input);
  let dataarray;
  if (localStorage.getItem("task") === null) {
    dataarray = [];
  } else {
    dataarray = JSON.parse(localStorage.getItem("task"));
  }
  dataarray.push(input);
  localStorage.setItem("task", JSON.stringify(dataarray));
}
function loadtask() {
  let dataarray;
  if (localStorage.getItem("task") === null) {
    dataarray = [];
  }
  dataarray = JSON.parse(localStorage.getItem("task"));
  dataarray.forEach((task) => {
    const node = document.createElement("li");
    const p = document.createElement("p");
    node.appendChild(p);
    p.innerHTML = task;
    tasks.appendChild(node);
    myinput.value = "";

    //edit button
    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.id = "editbtn";
    node.appendChild(editbtn);

    //delete button
    const dltbutton = document.createElement("button");
    dltbutton.textContent = "Delete";
    dltbutton.id = "deletebtn";
    node.appendChild(dltbutton);
  });
}

function deletetodo(e) {
  let dataarray;
  if (localStorage.getItem("task") === null) {
    dataarray = [];
  } else {
    dataarray = JSON.parse(localStorage.getItem("task"));
  }
  let todotext=e.children[0].innerHTML;
  let todoindex=dataarray.indexOf(todotext);
  dataarray.splice(todoindex,1);
  localStorage.setItem("task",JSON.stringify(dataarray));
}

function editlocaltodo(e) {
  let inttext=e;
  let dataarray=JSON.parse(localStorage.getItem("task")); 
  let todoindex=dataarray.indexOf(e);
  dataarray[todoindex]=myinput.value;
  localStorage.setItem("task",JSON.stringify(dataarray));
}


const updatetodo = (e) => {
  //console.log(e.target.innerHTML);
  if (e.target.innerHTML === "Delete") {
    //console.log(e.target.parentElement);
    const listItem = e.target.parentElement;
    tasks.removeChild(listItem);

    //localStorage.removeItem(e.target.getItem);
    deletetodo(e.target.parentElement);
  }
  if (e.target.innerHTML === "Edit") {
    //console.log(e.target.previousElementSibling.innerHTML);
    myinput.value = e.target.previousElementSibling.innerHTML;
    myinput.focus();
    btn.innerHTML = "Edit";
    btn.style.backgroundColor = "rgb(9, 197, 9)";
    editTodo = e;
  }
};
document.addEventListener('DOMContentLoaded',loadtask);
btn.addEventListener("click", addtask);
tasks.addEventListener("click", updatetodo);
//dltbtn.addEventListener('click',deletetask);
