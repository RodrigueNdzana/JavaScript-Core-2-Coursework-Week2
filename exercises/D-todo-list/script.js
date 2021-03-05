function todoList(todos) {
  // access the div that would be storing the created element
  let content=document.querySelector('#content')
  // add heading to the page
  let heading=document.createElement('h1');
  heading.innerText='To-do List';
  heading.style.textDecorationLine="underline";
  content.appendChild(heading)
  //create a <ul> tags and append it in the div
  let createUnOrderList=document.createElement('ul')
  content.appendChild( createUnOrderList)
  
  
  todos.forEach((element) => {
    // for each element in the list create a <li> element and the text inside of the list(textContent) be equal the the value that are in the array
    let createOrderList=document.createElement('li');
    createOrderList.innerText
    =element.todo;
    createUnOrderList.appendChild(createOrderList);
  });
  //access all the <li></li> element in the HTML body. Using an if statement , I am checking if for each element in has the textDecoration of line-through , if the condition is true, then give the textDecoration style on the list to none else if it is false draw a line to it when click upon.
  let getAllList=document.querySelectorAll('li');
  getAllList.forEach(list =>{
  list.addEventListener("click", function() {
    
    if (list.style.textDecoration==="line-through"){
      list.style.textDecoration="none";
    }
    else {
      list.style.textDecoration="line-through";
    }
  })
})
    
  
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);