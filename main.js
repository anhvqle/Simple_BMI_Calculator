var calButton = document.getElementById("calButton");
var resetButton = document.getElementById("resetButton");
var height = document.getElementById("height-input");
var weight = document.getElementById("weight-input");
var resultArea = document.getElementById("result");

const bmi = () => {
  const h = +height.value;
  const w = +weight.value;
  const result = (w / (h * h)).toFixed(4);
  if(isNaN(result)){
    alert("Please enter numeric values");
    return;
  }
  const resultElement = document.createElement('ion-card');
  resultElement.innerHTML = `
    <ion-card-content>
      <h2>${result}</h2>
    </ion-card-content>
  `;
  resultArea.innerHTML = "";
  resultArea.appendChild(resultElement);
};

const resetInputs = () => {
  height.value = "";
  weight.value = "";
};

calButton.addEventListener("click", bmi);
resetButton.addEventListener("click", resetInputs);
