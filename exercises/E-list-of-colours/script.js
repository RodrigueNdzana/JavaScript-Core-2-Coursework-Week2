const colours = ["red", "blue", "green", "yellow", "pink", "brown"];
function listOfColours(colours) {
  //access the content of the page
  let contentDiv=document.getElementById('content')
  // let add the heading and append it in the div container
  let heading= document.createElement('h1');
  heading.innerHTML='<em>List Of Color </em>';
  heading.style.textDecorationLine='underline';
  contentDiv.appendChild(heading)
  
  //create a select element <select></select and append it in the div container
  let createSelect=document.createElement('select');
  contentDiv.appendChild(createSelect);
  // create a paragraph element <p></p> and append it to the div container
  let createParagraph=document.createElement('p');
  contentDiv.appendChild(createParagraph)
  colours.forEach((colour) => {
    // for each element create a option tag and and I set it be the colour found in the array
    let createOption=document.createElement('option');
    createOption.innerText=colour
    createSelect.appendChild(createOption)
    
  
  });
  // now I add a click event listener and I make use of .value method. since we don't know the colour the users would select
  //let iterateOption=Array.from(document.querySelectorAll('option'));
  createSelect.addEventListener("click", ()=> {
        createParagraph.innerText=`you have selected: ${createSelect.value}`
        createParagraph.style.color=createSelect.value;
      })
   
 
}



listOfColours(colours);
