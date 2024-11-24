function updateTime(){
let dubaiElement = document.querySelector("#dubai");
let dubaiDateElement = dubaiElement.querySelector(".date");
let dubaiTimeElement = dubaiElement.querySelector(".time");
let dubaiTime = moment().tz("Asia/Dubai");

dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
dubaiTimeElement.innerHTML = dubaiTime.format("h:mm:ss [<small>]A[</small>]");

let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
