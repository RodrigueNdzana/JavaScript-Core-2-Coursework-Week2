// part one when clicking blue button
let blueClick=document.getElementById('blueBtn');
let blueChangedJumbotron=document.querySelector('.jumbotron');
let blueChangedDonateButton=document.querySelector('.buttons a:first-child');
let changeVolunteer= document.querySelector('.buttons a:last-child');
blueClick.addEventListener('click', () => {
    blueChangedJumbotron.style.backgroundColor = "#588fbd";
    blueChangedDonateButton.style.backgroundColor="#ffa500";
    changeVolunteer.style.backgroundColor="black";
    changeVolunteer.style.color="white";
});

// part one when clicking orange button
let orangeClick=document.getElementById('orangeBtn');
let orangeChangedJumbotron=document.querySelector('.jumbotron');
let  orangeChangedDonateButton=document.querySelector('.buttons a:first-child')
let orangeChangedVolunteerButton= document.querySelector('.buttons a + a'); //adjacent sibling selector
orangeClick.addEventListener('click', () =>{
    orangeChangedJumbotron.style.backgroundColor='#f0ad4e';
    orangeChangedDonateButton.style.backgroundColor='#5751fd';
    orangeChangedVolunteerButton.style.backgroundColor="#31b0d5";
    orangeChangedVolunteerButton.style.color="#FFFFFF";
})

// part one when clicking green button
let greenClick=document.getElementById('greenBtn');
let greenChangedJumbotron=document.querySelector('.jumbotron');
let  greenChangedDonateButton=document.querySelector('.buttons a:first-child')
let greenChangedVolunteerButton= document.querySelector('.buttons a + a'); //adjacent sibling selector
greenClick.addEventListener('click', () =>{
    greenChangedJumbotron.style.backgroundColor='#87ca8a';
    greenChangedDonateButton.style.backgroundColor='black';
    greenChangedVolunteerButton.style.backgroundColor="#8c9c08";
})


//part 2 register form
//access the DOM
let submitButton=document.getElementById("example");
let getEmailInput=document.getElementById('exampleInputEmail1');
let getName=document.getElementById('example-text-input');
let getTextArea=document.getElementById('exampleTextarea');

//function to check if the fill is first fill
function checkFill(){
    if(getEmailInput.value==='' ||getName.value===''|| getTextArea.value===''){
        alert('please fill all field');

    }
    return true;
}
// function to check if the field has valid input
function checkInput(){
    if(getEmailInput.value.includes('@') || getName.value.length > 0 || getTextArea.value !== ""){
        
        alert('great Thank you have successfully register')
        
    }
    else{
        getEmailInput.style.backgroundColor='red';
        getName.style.backgroundColor='red';
        getTextArea.style.backgroundColor='red';
        
    }
}
submitButton.addEventListener('click',() => {
    checkFill();
    checkInput()
});