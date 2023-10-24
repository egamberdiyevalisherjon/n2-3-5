let fName = prompt("Ismingizni kiriting: ");
let lName = prompt("Familiyangizni kiriting: ");
let age = prompt("Yozingizni kiriting: ");
let city = prompt("Yashash shahringiz: ");
let district = prompt("Yashash tumaningiz: ");
let street = prompt("Yashash ko'changiz: ");
let homeNumber = prompt("Uyinginz raqami: ");
let job = prompt("Kasbingiz: ");
let hasBeenSued = confirm("Sudlanganmisiz: ");

console.log(
  fName +
    " " +
    lName +
    ", " +
    age +
    " yoshda, " +
    city +
    " shahri " +
    district +
    " tumani " +
    street +
    " ko'chasi " +
    homeNumber +
    " uyda istiqomat qiladi. Kasbi: " +
    job +
    ". Muhaddam sudlanganligi: " +
    hasBeenSued
);
