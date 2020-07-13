var plButton = document.getElementById("p1");
var p1Display = document.querySelector("#p1Display");
var p1Score = 0;
var p2Button = document.getElementById("p2");
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var winningScore = 5;
var gameOver = false;

// player one
plButton.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
      p1Display.style.color = "green";
    }
    p1Display.textContent = p1Score;
  }
});

// player Two
p2Button.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
      p2Display.style.color = "green";
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function () {
  reset();
});

// event to update winning score  when score changes
// event to update input value when score changes
function reset() {
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.style.color = "black";
  p2Display.style.color = "black";
  gameOver = false;
}

numInput.addEventListener("change", function () {
  // whatever the input has as value, it will be displayed on p
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
});


