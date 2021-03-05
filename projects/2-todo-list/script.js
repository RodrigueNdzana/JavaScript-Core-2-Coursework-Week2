// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
function populateTodoList(todos) {
  let listEl=document.getElementById('todo-list')
  todos.forEach((el,index) => {
    let createList=document.createElement('li')
    createList.className="list-group-item d-flex justify-content-between align-items-center";
    createList.innerHTML=el.task;
    //console.log(createList);

  // create the <span> </span> and assign the provided class name
    let createSpan=document.createElement('span');
    createSpan.className="badge bg-primary rounded-pill";

  // create a fa icon
  let createFa=document.createElement('i');
  createFa.className='fa fa-check';
  // set his attribute by using the setAttribute method
  createFa.setAttribute('aria-hidden',true);

  //create a click event
  createFa.addEventListener('click', ()=>{
    if(createList.style.textDecorationLine !=='line-through'){
      createList.style.textDecorationLine=='none'
    }
    else{
      createList.style.textDecorationLine='none'
    };
  });

  //delete trash event
  let createDeleteTrash=document.createElement('i');
  createDeleteTrash.className='fa fa-trash';
  createDeleteTrash.setAttribute('aria-hidden',true)
  createDeleteTrash.addEventListener('click', ()=>{
    delete todos[index];
    populateTodoList();
  });

 
  

}




populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
