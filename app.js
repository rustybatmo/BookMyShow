

const seats = document.querySelectorAll('.seat-container .seat:not(.occupied)');
// console.log(seats);
const count = document.querySelector('#count');
// console.log(totalPrice.value);
const container = document.querySelector('.container');
var a = 0;
container.addEventListener('click', function(e){

  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){

    if(e.target.className == 'seat seat-grey'){
      e.target.classList.add('selected');
      e.target.classList.remove('seat-grey');
      a++;
    }else{
      e.target.classList.remove('selected');
      e.target.classList.add('seat-grey');
      a--;
    }
  }
  count.textContent = a;
  let movieSelect = document.querySelector('#movie');
  let ticketPrice = parseInt(movieSelect.value);
  let totalPrice = document.querySelector('#cost');

  totalPrice.textContent = ticketPrice * a;

  movieSelect.addEventListener('change', function(e){

    ticketPrice = e.target.value;
    totalPrice.textContent = ticketPrice * a;
  });
});




















// console.log(ticketPrice);


// movieSelect.addEventListener('change', function(e){
//   const ticketPrice = movieSelect.value;
//   console.log(ticketPrice);
// });







