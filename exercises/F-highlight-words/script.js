function highlightWords(paragraph, colours) {
  // access the content
  let contentDiv=document.getElementById('content')
  //create a heading
  let heading= document.createElement('h1');
  heading.innerHTML='<em>Highlight words</em>'
  heading.style.textDecorationLine='underline';

  // create a <p></p> element
  let createParagraphEl=document.createElement('p');
  // create a <select></select> element
  let createSelectEl=document.createElement('select')
  
  //append the both <p> tags and <select> tag to the div
  contentDiv.appendChild(createSelectEl)
  contentDiv.appendChild(createParagraphEl);
  

  //iterate through the colour array using the forEach loop.
  // for each color create an <option></option> element and set the innerText be the colour element found in the colour array
  colours.forEach(colour => {
    let createOptionEl=document.createElement('option')
    createOptionEl.innerText=colour;
    createSelectEl.appendChild(createOptionEl)
  })

  // turn the paragraph into an array
  let createParagraph=document.createElement('p')
  let turnParagraphIntoArray=paragraph.split("");
  turnParagraphIntoArray.forEach(el => {
    //for each word create a span
    let createSpan=document.createElement('span')
    createSpan.innerText = el + " ";
    createParagraph.appendChild(createSpan);
    createSpan.addEventListener('click', () => {
      if (createSelectEl.value ==='none'){
        createSelectEl.style.backgroundColor="red"
      }else{
        createSelectEl.style.backgroundColor=createSelectEl.value;
      }
    })
  });
  contentDiv.appendChild( createParagraph)
} 

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
