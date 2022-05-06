//Variable Declarations
let etch = document.querySelectorAll('.etch');
let scale = document.querySelector('.scale')
var container = document.querySelector(".container")

//Events
scale.addEventListener('click', function(e){
  let number = prompt('What size grid would you like to create?')
  container.innerHTML = ''
  containSize(number)
 });
 

etch.forEach((etch) => {
etch.addEventListener("mouseover", function( event ) {
  etch.classList.add('highlight')},
  false);
})

let refresh = document.querySelector('.refresh')
refresh.addEventListener('click', function(e){
  window.location.reload()
})
  
//Multiplier Function
function containSize(number){
  if (number > 100){
    alert('Please enter a number less than 100.')
    return
  }

  for (var i = 1; i <= (number * number); i++) {
    container.innerHTML += '<div class="etch"></div>';
 }  
}