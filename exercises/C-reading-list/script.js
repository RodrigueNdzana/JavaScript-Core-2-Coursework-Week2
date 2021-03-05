//  access the div container
let content= document.querySelector('#content');
// add the heading title in the page
let createHeading=document.createElement('h1');
createHeading.textContent='List of Books';
// adding the the class name to it which is the name of the style created in the head tag of our html
createHeading.className='styleHeading';
content.appendChild(createHeading)



function readingList(books) {
  let content=document.getElementById('content')
  let unOrderList= document.createElement('ul');
  content.appendChild(unOrderList)
  books.forEach(book => {
    // for each book create a paragraph
    let createParagraph=document.createElement('p');
    //assign the value of the title and author to it
    createParagraph.textContent=`${book.title} - ${book.author}`
    // create an <li> element
    let orderList=document.createElement('li')
    //append it in the <ul> tag and the orderList- append it in the paragraph
    unOrderList.appendChild(orderList)
    orderList.appendChild(createParagraph)

    // create an image element (<img>). Using the src attribute since the image have the src attribute. 
    // I am accessing my tag name (img) and assign the attribute od src to it which is equal the value of the source to the image pass in the object keys
    let image=document.createElement('img')
    image.src=book.img;
    unOrderList.className='unOrderListStyle';
    orderList.className='OrderListStyle';
    orderList.appendChild(image)
    
    
   
    //Change the style of the book depending on whether you have read it (green) or not (red).
    if (book.alreadyRead==true){
      orderList.style.backgroundColor='green';
    }
    else{
      orderList.style.backgroundColor='red';
    }
  });

}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    img:'images/firstImage.jfif'
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:'images/secondImage.jfif'
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    img:'images/thirdImage.jfif'
  }
];

readingList(books);