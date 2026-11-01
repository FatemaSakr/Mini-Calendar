let monthEl = document.querySelector('.month');
let dayEl = document.querySelector('.day');
let numberEl = document.querySelector('.number');
let yearEl = document.querySelector('.year');


let dateNumber = new Date().getDate();
numberEl.textContent= dateNumber;
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dateDay = new Date().getDay();
dayEl.textContent= days[dateDay];
let months =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let dateMonth = new Date().getMonth();
monthEl.textContent= months[dateMonth];
let dateYear = new Date().getFullYear();
yearEl.textContent= dateYear;