let ccv = document.querySelector(".ccv");
let cardInner = document.querySelector(".card-inner");

ccv.addEventListener("focus", function () {
    cardInner.style.transform = `rotateY(180deg)`;
});

ccv.addEventListener("blur", function () {
    cardInner.style.transform = `rotateY(0deg)`
})


let cardNumber = document.querySelector(".card__number")
let numberCard = document.querySelector(".number")





numberCard.addEventListener("input", function () {
    let numberValue = numberCard.value;
    if (numberValue == "") {
        cardNumber.textContent = "**** **** **** ****";
    } else {
        cardNumber.textContent = numberValue.replace(/(\d{4})/g, "$1 ");
    }
});


let fullname = document.querySelector(".fullname")
let inputname = document.querySelector(".inputname")


inputname.addEventListener("input", function () {

    let inputNameValue = inputname.value;
    if (inputNameValue == "") {
        fullname.textContent = "FULL NAME";
    } else {
        fullname.innerHTML = inputNameValue
    }
    if (inputNameValue.length > 18) {
        inputNameValue = inputNameValue.slice(0, 16)
        inputname.value = inputNameValue
    }


})


let dateValue = document.querySelector(".date-value")
let expire = document.querySelector(".expire")


expire.addEventListener("input", function () {
    let expireValue = expire.value;
    if (expireValue == "") {
        dateValue.textContent = "MM / YY";
    } else {
        dateValue.textContent = expireValue
    }
    if (expireValue.length === 2 && !expireValue.includes("/")) {
        expireValue += " / ";
        expire.value = expireValue
    }
    if(expireValue.length >= 7){
        expireValue = expireValue.slice(0, 7)
        expire.value = expireValue
    }


})

let ccvCode = document.querySelector(".ccv-code")
let ccvEl = document.querySelector(".ccv")


ccvEl.addEventListener("input", function () {
    let ccvValue = ccvEl.value;
    if (ccvValue == "") {
        ccvCode.textContent = "***";
    } else {
        ccvCode.textContent = ccvValue
    }

    if (ccvValue.length > 3) {
        ccvValue = ccvValue.slice(0, 2)
        ccvEl.value = ccvValue
    }
    console.log(ccvValue)

})