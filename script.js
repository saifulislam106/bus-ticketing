
const allSeatBtn = document.getElementsByClassName("seat-num");
for (const seatBtn of allSeatBtn) {
    seatBtn.addEventListener("click", function (e) {
        const seatName = e.target.innerText;

        // creat dynamic seat table cart

        const myCartContainer = document.getElementById("my-cart-container");

        const div = document.createElement("div");
        div.classList.add("flex", "m-8", "justify-around")

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = seatName;
        p2.innerText = "economy";
        p3.innerText = parseInt("550");

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        myCartContainer.appendChild(div);


        totalSeatPrice(parseInt("550"));
        updateGrandTotal()
    })
}
// total selected seat price

function totalSeatPrice(value) {
    // console.log(value);
    const totalPrice = getPrice("total-price");
    const convertValue = parseInt(value)
    const sum = totalPrice + convertValue;
    document.getElementById("total-price").innerText = sum;
}

// Grand total

function updateGrandTotal(status) {
    const totalPrice = getPrice("total-price");

    if (status == undefined) {
        document.getElementById("grand-total").innerText = totalPrice;
    }
    else{
        const couponCode = document.getElementById("coupon-code").value;
        
        if(couponCode == "june24"){
            const discountedPrice = totalPrice*.2; 
            document.getElementById("grand-total").innerText = totalPrice - discountedPrice;
        }
        else{
            alert("Please enter yout valid coupon code")
        }
    }



}



function getPrice(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice
}

const seat = getPrice("seat-price");
console.log(seat);