function shoppingList(arrayOfPeople) {
  let content=document.querySelector('#content')
  let heading=document.createElement('h1');
  heading.innerText="Shopping List";
  heading.style.textDecorationLine="underline"
  content.appendChild(heading)
  // create an <ul> tag and append it in the <div>
  let unOrderList=document.createElement('ul');
  content.appendChild(unOrderList);
   arrayOfPeople.forEach(list => {
     // for each items create an list element
     let listItems=document.createElement('li');
     //for each element give a innerText which is the value from the array
     listItems.innerText=list;
     //append the list inside the unOrderList
     unOrderList.appendChild(listItems);

    
     
   });
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
