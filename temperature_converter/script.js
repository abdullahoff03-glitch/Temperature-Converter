const tempInput = document.getElementById("tempInput");
const ctof = document.getElementById("ctof");
const ftoc = document.getElementById("ftoc");
const result = document.getElementById("result");
let temp;

function convert() {
  if (ctof.checked) {
    temp = Number(tempInput.value);
    temp = temp * (9 / 5) + 32;
    result.textContent = temp.toFixed(1) + " °F";
  } else if (ftoc.checked) {
    temp = Number(tempInput.value);
    temp = ((temp - 32) * 5) / 9;
    result.textContent = temp.toFixed(1) + " °C";
  } else {
    result.textContent = "Select the unit";
  }
}
