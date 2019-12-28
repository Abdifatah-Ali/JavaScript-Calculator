const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

// Run through loop that stops before it gets to the end of the btns length(loop through whenever all buttons we have in our html)
for(let i = 0; i < btns.length; i++){
  //Targeting first btn (Add even listenter all of the btns which represent i)
  btns[i].addEventListener('click', function (){
    // Create a var called number that holds and gets data-num attribute for all btns
    let number = btns[i].getAttribute('data-num');
    //Once we grap the attribute, we could place it to the input (screen) that holds our value
    screen.value += number //Evertime we click the button we gonna collect data attribute that actually holds the value we see over btns section, and then it places to the input (screen)
  })
}

// Add eventListener to the = btn 
equalBtn.addEventListener('click', function (){
  // Create a var called number that holds and gets data-num attribute for all btns
  
  //Getting ride of undefined whenever we clicked = sign when there is a value in the input (We gonna create an if statement with alert and then add else to the previous code)

  if(screen.value === '') {  // '' means empty
    alert('Oops! Input is empty.');
  }
  else{
  let value = eval(screen.value); //eval is looking for whatever value in input screen 
  screen.value = value;
  } 
})


// Add eventListener to the clear btn
clearBtn.addEventListener('click', function (){
// screen value equal to clear
  screen.value = '';
})






/* Function is ES6 way:

equalBtn.addEventListener('click',()=>{

});


// Ananymous function way ---  when there is no much code:

equalBtn.addEventListener('click', function (){

});


// Writing function outside when you have defined function

equalBtn.addEventListener('click', equalValueBtn);
function nextSlide(parameters){
  code to be executed
}



// += means


screen.value += number     is equivalent to

screen.value = screen.value + number

//Example: Consider a = 5,   b = 3;

a += b;

The above expression is equivalent to: a = a + b;

The result for both the expressions will be a = 8

*/