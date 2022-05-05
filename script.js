let etch = document.querySelectorAll('.etch');

etch.forEach((etch) => {
etch.addEventListener("mouseover", function( event ) {
  etch.classList.add('highlight')},
  false);
})

let scale = document.querySelector('.scale')

scale.addEventListener('click', function(e){
  prompt('What size grid would you like to create?')});
