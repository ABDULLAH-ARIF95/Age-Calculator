var currentYear = new Date().getFullYear();
console.log(currentYear);

var userBirthYear = Number(prompt("Enter Your Birth Year", 2000));
var showToUser = document.getElementById("userAge");
showToUser.innerText = currentYear - userBirthYear;
console.log(currentYear - userBirthYear);
