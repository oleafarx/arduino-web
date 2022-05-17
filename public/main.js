const socket = io();

const temperatureDisplay = document.getElementById('temperature');
const humedadDisplay = document.getElementById('humedad');

socket.on('temp', function (data) {
  let temp = data.split('');
  console.log(temp);
  temperatureDisplay.innerHTML = `${temp[0]}${temp[1]}${temp[2]}${temp[3]}${temp[4]}°C`;
  humedadDisplay.innerHTML = `${temp[5]}${temp[6]}${temp[7]}${temp[8]}${temp[9]}°C`;
});
