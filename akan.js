let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosue", "Adwoa", "Abenaa", "Akue", "Yaa", "Afua", "Ama"];
let genders = document.getElementsByClassName("gender");


function displayDate(){

    let x = document.forms["myForm"]["date"].value;
    let y = document.forms["myForm"]["sex"].value;

    if (x == ""){
        alert("This is not a valid date format!!")
    }    
    if (y == "") {
        alert("Please select your gender!!")
    }
    
    checkDay(x);
    displayContainer();
    
    
    for (let gender of genders) {
        if(gender.checked){
            return gender.value
        }
    }
}

function displayContainer() {
    let pageOne = document.getElementById("container1");
    let pageTwo = document.getElementById("container2");
    pageOne.style.display = "none";
    pageTwo.style.display = "block";
}
function checkDay(x) {
    let isValidDate = Date.parse(x);
    let date = new Date(isValidDate);
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let year = (date.getFullYear()).toString();
    let c = year.substring(0, 2);
    let y = year.substring(2, 4);
    let index = date.getDay();
    let z = document.getElementById("message");
    z.innerHTML = (`Hi! you were born on a ${days[index]} and your Akan name is ${femaleNames[index]}.`)
}


