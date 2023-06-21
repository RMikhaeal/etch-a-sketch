//Color picker function
let colorPicker;
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

//Slider value
var slider = document.getElementById("slider");
var output = document.getElementById("slidervalue");
output.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function() {
  output.innerHTML = this.value + " x " + this.value;
}

//Grid size selection
const container = document.querySelector('.container');

function createGrid(s) {
  for (let i = 0; i < s; ++i) {
    var col = document.createElement('div');
    col.className = 'col';
    for (let j = 0; j < s; ++j) {
      var row = document.createElement('div');
      row.className = 'row';
      row.addEventListener('mouseover', colorDiv);
      col.appendChild(row);
    }
    container.appendChild(col);
  }
}

const button = document.getElementById("changegrid");

button.addEventListener('click', () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid(slider.value);
});

function colorDiv(e) {
  if (e.buttons == 1) {
    console.log(this);
    this.style.backgroundColor = colorPicker.value;
  }
}