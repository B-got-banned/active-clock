function updateClock(){
  const date = new Date();
  let hours = date.getHours().toString().padStart(2, 0);
  let minutes = date.getMinutes().toString().padStart(2, 0);
  let seconds = date.getSeconds().toString().padStart(2, 0);
  let meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  let time = document.getElementById("clock");
  time.textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;
}
updateClock();
setInterval(updateClock, 1000);