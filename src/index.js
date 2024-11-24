function updateTime(){
let dubaiElement = document.querySelector("#dubai");
if (dubaiElement) {
let dubaiDateElement = dubaiElement.querySelector(".date");
let dubaiTimeElement = dubaiElement.querySelector(".time");
let dubaiTime = moment().tz("Asia/Dubai");

dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
dubaiTimeElement.innerHTML = dubaiTime.format("h:mm:ss [<small>]A[</small>]");
}
let londonElement = document.querySelector("#london");
if (londonElement) {
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
}
}

function updateCity(event) {
    if (event.target.value.length >0) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment.tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = 
    ` <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small</div>
         </div>
         <a href ="/"></a>`;
}
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

