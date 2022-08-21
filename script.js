const container = document.getElementById("container");
const erase = document.getElementById('erase');
let size = 0;

container.setAttribute('style', 'max-width: 500px; min-height: 500px;');

function makeRows(rows, cols) {
  container.innerHTML = '';
  //container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--gridColumns', cols);
  
  for (c = 0; c < (rows * cols); c++) {

    let cell = document.createElement("div");
    cell.style.opacity = 0;
    cell.addEventListener('mouseover', function () {
      cell.style.opacity = Number(cell.style.opacity) + 0.1;  
    });
    container.appendChild(cell).className = "grid-item";
    erase.addEventListener('click', () => cell.style.opacity = 0);

  };

};

let sizebtn = document.getElementById('sizebtn');
sizebtn.addEventListener('click', function () {
  let input = prompt('Input  a number between 1 and 100 for grid size');
  if (input < 101) makeRows(input, input);
})


