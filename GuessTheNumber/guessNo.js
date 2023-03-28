var buttons = document.getElementById("buttons");
var randomIndex;
var chances;
function startGame() {
  var buttonTemplate = "";
  var buttonCount = 14;
  chances = 6;
  randomIndex = Math.floor(Math.random() * buttonCount);

  for (var i = 0; i < buttonCount; i++) {
    buttonTemplate +=
      "<button id='game" + i + "' onclick='checkButton(" + i + ")'></button>";
  }
  buttons.innerHTML = buttonTemplate;
}

function checkButton(index) {
  var button = document.getElementById("game" + index);

  if (index === randomIndex) {
    button.classList.add("yellow");
    buttons.innerHTML += "<h3>You found right No! You win!</h3>";
    document.getElementById("game").disabled= true;
  } else if (index < randomIndex) {
    button.classList.add("green");
  } else {
    button.classList.add("red");
  }
  chances--;
  if (chances === 0 && index !== randomIndex) {
    buttons.innerHTML += "<h1>You ran out of chances. You lose!</h1>";
  }
}
