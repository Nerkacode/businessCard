const button = document.getElementById("submit");
const output = document.getElementById('output');

button.addEventListener('click', function () {

    let fullName = document.getElementById("fullName");
    window.localStorage.setItem("fullName", fullName.value);
    let getFullName = window.localStorage.getItem("fullName");

    let email = document.getElementById("email");
    window.localStorage.setItem("email", email.value);
    let getEmail = window.localStorage.getItem("email");

    let BusAdr = document.getElementById("BusAdr");
    window.localStorage.setItem("BusAdr", BusAdr.value);
    let getBusAdr = window.localStorage.getItem("BusAdr");

    let phoneNr = document.getElementById("phoneNr");
    window.localStorage.setItem("phoneNr", phoneNr.value);
    let getPhoneNr = window.localStorage.getItem("phoneNr");

    let discript = document.getElementById("discript");
    window.localStorage.setItem("discript", discript.value);
    let getDiscript = window.localStorage.getItem("discript");

    output.innerHTML = "Full name: " + getFullName + 
    "<br> Email: " + getEmail + 
    "<br> Business adress: " + getBusAdr + 
    "<br> Phone number: " + getPhoneNr + 
    "<br> Discription : " + getDiscript;

});

function printingData() {
    let getFullName = window.localStorage.getItem("fullName");
    let getEmail = window.localStorage.getItem("email");
    let getBusAdr = window.localStorage.getItem("BusAdr");
    let getPhoneNr = window.localStorage.getItem("phoneNr");
    let getDiscript = window.localStorage.getItem("discript");

    output.innerHTML = "Full name: " + getFullName + 
    "<br> Email: " + getEmail + 
    "<br> Business adress: " + getBusAdr + 
    "<br> Phone number: " + getPhoneNr + 
    "<br> Discription : " + getDiscript;
}

printingData();