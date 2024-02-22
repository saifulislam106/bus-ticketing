

let selectedSeats = [];
let totalPrice = 0;

function selectSeat(seatId){
    const seatIndex = selectedSeats.indexOf(seatId);
    if (seatIndex === -1){
        selectedSeats.push(seatId);
        totalPrice += 550;
    }
    else{
        selectedSeats.splice(seatIndex , 1);
        totalPrice -= 550;
        updateSeatInfo();
    }
}

function updateSeatInfo(){
    const seatInfoElement = document.getElementById('seatInfo');
    const totalPriceElement = document.getElementById('totalPrice');

    seatInfoElement.innerText = '';
    selectedSeats.forEach(seatId =>{
        const seatInfo = document.createElement('div');
        
        seatInfo.textContent = ` ${seatId}, economy, 550 `;
        seatInfo.classList.add('flex',);
        seatInfo.classList.add('justify-around');
    });
    totalPriceElement.textContent = totalPrice
}