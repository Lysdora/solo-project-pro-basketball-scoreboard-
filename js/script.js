"use-strict";
let scoreHome = 0;
let scoreGuest = 0;

//I create 3 functions to increment score to Home '+1 +2 and +3
function addPlusOneHome() {
  document.getElementById("score-home").textContent = scoreHome += 1;
}

function addPlusTwoHome() {
  document.getElementById("score-home").textContent = scoreHome += 2;
}

function addPLusThreeHome() {
  document.getElementById("score-home").textContent = scoreHome += 3;
}

function addPlusOneGuest() {
  document.getElementById("score-guest").textContent = scoreGuest += 1;
}

function addPlusTwoGuest() {
  document.getElementById("score-guest").textContent = scoreGuest += 2;
}

function addPlusThreeGuest() {
  document.getElementById("score-guest").textContent = scoreGuest += 3;
}
