var columns = 64;
var rows = 64;
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
    this.style.backgroundColor = 'red';
  }
}