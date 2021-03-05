function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  // let firstHeading, secondHeading;
  // arrayOfPeople.forEach(people => {
  //   //create the the heading element
  //   firstHeading=document.createElement('h1');
  //   secondHeading=document.createElement('h2');
  //   //assign value to it and append it to the div tag
  //   firstHeading.textContent=people['name'];
  //   content.appendChild(firstHeading)
  //   secondHeading.textContent=people['job']
  //   content.appendChild(secondHeading)
  // });
  //another solution
for (let keys in arrayOfPeople){
  let firstHeading=document.createElement('h1')
  let secondHeading=document.createElement('h2')
  firstHeading.innerText= arrayOfPeople[keys].name;
  content.appendChild(firstHeading);
  secondHeading.innerText=arrayOfPeople[keys].job;
  content.appendChild(secondHeading);
}
 
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
