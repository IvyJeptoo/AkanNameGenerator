let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let femaleNames = ["Akosue", "Adwoa", "Abenaa", "Akue", "Yaa", "Afua", "Ama"]
let genders = document.getElementsByClassName("gender")

function checkDay(x) {
    let isValidDate = Date.parse(x);
    let date = new Date(isValidDate);
    let index = date.getDay();
    let z = document.getElementById("message");
    z.innerHTML = (`Hi! you were born on a ${days[index]} and your Akan name is ${femaleNames[index]}.`)
}

function displayDate(){

}
