

const seatNum = document.getElementsByClassName('seat-num');
console.log(seatNum);

for(const seat of seatNum){
    seat.addEventListener('click', function(event){
        console.log(event.target);
    })
}