var calButton = document.querySelector("ion-button");
var height = document.getElementById("height-input");
var weight = document.getElementById("weight-input");

const bmi = () => {
  var h = +height.value;
  var w = +weight.value;
  var result = w / (h * h);
  console.log(result);
};

calButton.addEventListener("click", bmi);
