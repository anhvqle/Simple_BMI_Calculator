var calButton = document.getElementById("calButton");
var resetButton = document.getElementById("resetButton");
var height = document.getElementById("height-input");
var weight = document.getElementById("weight-input");

const bmi = () => {
  var h = +height.value;
  var w = +weight.value;
  var result = w / (h * h);
  console.log(result);
};

const resetInputs = () => {
  height.value = "";
  weight.value = "";
};

calButton.addEventListener("click", bmi);
resetButton.addEventListener("click", resetInputs);
