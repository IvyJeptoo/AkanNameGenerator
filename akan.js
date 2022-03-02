let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let femaleNames = ["Akosue", "Adwoa", "Abenaa", "Akue", "Yaa", "Afua", "Ama"]
let genders = document.getElementsByClassName("gender")

function checkDay(dateInput) {
    let isValidDate = Date.parse(dateInput);
    let date = new Date(isValidDate);
    let index = date.getDay();
    let z = document.getElementById("message");
    z.innerHTML = (`Hi! you were born on a ${days[index]} and your Akan name is ${femaleNames[index]}.`)
}
function displayContainer() {
    let pageOne = document.getElementById("container1");
    let pageTwo = document.getElementById("container2");
    pageOne.style.display = "none";
    pageTwo.style.display = "block";
}

function displayDate(){
    let dateInput = document.forms["myForm"]["date"].value;
    let sexInput = document.forms["myForm"]["sex"].value;

    

}
