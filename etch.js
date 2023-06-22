//Color picker function
var colorPicker;
const defaultColor = "#000000";
window.addEventListener("load", startup, false);

function startup() {
  colorPicker = document.querySelector("#colorpicker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateFirst, false);
  createGrid(slider.value);
}

function updateFirst(event) {
  colorPicker.value = event.target.value;
}

//Clear Grid
const clear = document.getElementById("clear");

clear.addEventListener('click', () => {
  var rows = document.querySelectorAll("div.row");
  rows.forEach(Element => Element.style.backgroundColor = 'white');
});

//Slider value
var slider = document.getElementById("slider");
var output = document.getElementById("slidervalue");
output.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function() {
  output.innerHTML = this.value + " x " + this.value;
}

//Grid Creation
const container = document.querySelector('.container');

function createGrid(s) {
  for (let i = 0; i < s; ++i) {
    var col = document.createElement('div');
    col.className = 'col';
    for (let j = 0; j < s; ++j) {
      var row = document.createElement('div');
      row.className = 'row';
      row.style.backgroundColor = 'white';
      row.addEventListener('mousedown', colorDiv);
      row.addEventListener('mouseenter', colorDiv);
      col.appendChild(row);
    }
    container.appendChild(col);
  }
}

//Grid Size Selection
const change = document.getElementById("changegrid");

change.addEventListener('click', () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid(slider.value);
});

function colorDiv(e) {
  var color = colorPicker.value

  if(rainbow.value == "ON") {
    color = getColor();
  }

  if(e.buttons == 1) {
    this.style.backgroundColor = color;
  }
}

//Rainbow
const rainbow = document.getElementById("rainbow");

rainbow.addEventListener('click', () => {
  if(rainbow.value == "OFF") {
    rainbow.value = "ON";
  }
  else {
    rainbow.value = "OFF";
  }
});

function getColor() {
  const letters = '0123456789ABCDEF';
  var randcolor = '#';
  for (var i = 0; i < 6; i++) {
    randcolor += letters[Math.floor(Math.random() * 16)];
  }
  return randcolor;
}
