let numAdding = 0;

document.getElementById("pl").addEventListener("click", addNumber);
document.getElementById("mi").addEventListener("click", subtractNumber);

function addNumber() {
  numAdding++;
  document.getElementById("num").textContent = numAdding;
}

function subtractNumber() {
  numAdding--;
  document.getElementById("num").textContent = numAdding;
}