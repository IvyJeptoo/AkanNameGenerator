let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosue", "Adwoa", "Abenaa", "Akue", "Yaa", "Afua", "Ama"];
let genders = document.getElementsByClassName("gender");



function displayDate(){
    let x = document.forms["myForm"]["date"].value;  
    let y = document.forms["myForm"]["sex"].value;
    let isValidDate = Date.parse(x);
    let date = new Date(isValidDate);
    let index = date.getDay();
    let z = document.getElementById("message");

    
    if (x == "" && document.getElementById("flexRadioDefault1").checked) {
        alert("This is not a valid date format!!!");
        return false;
    } else if (x == "" && document.getElementById("flexRadioDefault2").checked) {
        alert("This is not a valid date format!!")
        return false;    
    }else if (x !== "" && document.getElementById("flexRadioDefault1").checked) {
        z.innerHTML = (`You were born on ${days[index]} and your Akan name is ${maleNames[index]}.`)
    } else {z.innerHTML = (`You were born on ${days[index]} and your Akan name is ${femaleNames[index]}.`)}     
    
    displayContainer();       
    
}

function displayContainer() {
    let pageOne = document.getElementById("container1");
   let pageTwo = document.getElementById("container2");
   pageOne.style.display = "none";
   pageTwo.style.display = "block";
}


