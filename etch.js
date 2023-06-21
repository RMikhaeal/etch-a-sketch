//Color picker function
let colorPicker;
const defaultColor = "#000000";
window.addEventListener("load", startup, false);

function startup() {
  colorPicker = document.querySelector("#colorpicker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateFirst, false);
}

function updateFirst(event) {
    colorPicker.value = event.target.value;
}

//Grid size selection
let columns = 64;
let rows = 64;
const container = document.querySelector('.container');

function createGrid(c, r) {
  for (let i = 0; i < c; ++i) {
    var col = document.createElement('div');
    col.className = 'col';
    for (let j = 0; j < r; ++j) {
      var row = document.createElement('div');
      row.className = 'row';
      row.addEventListener('mouseover', colorDiv);
      col.appendChild(row);
    }
    container.appendChild(col);
  }
}

createGrid(columns, rows);

function colorDiv(e) {
  if (e.buttons == 1) {
    console.log(this);
    this.style.backgroundColor = colorPicker.value;
  }
}