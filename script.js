var templateButton;
var number;
var maxLength;
var attempts;

window.onload = function () {
  templateButton = document.getElementById("templateButton");

  startGame();
};

function startGame() {
  attempts = 0;

  var parent = document.getElementById("mainDiv");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  var n = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
  maxLength = n;
  for (var i = 0; i < n; i += 1) {
    cloneButton("b" + i.toString(), i);
  }

  number = Math.floor(Math.random() * ((maxLength - 1) - 0 + 1)) + 0;
}

function cloneButton(newId, num) {
  let clone = document.querySelector('#templateButton').cloneNode(true);
  clone.setAttribute('id', newId);

  document.querySelector('#mainDiv').appendChild(clone);
  document.getElementById(newId).style.visibility = "visible";
  document.getElementById(newId).innerText = num.toString();
}

function pressed() {
  var id = parseInt(event.srcElement.id.toString().substring(1));

  if (number < id) {
    for (var i = id + 1; i < maxLength; i += 1) {
      document.getElementById("b" + (i).toString()).style.background = '#48e073';
    }
    document.getElementById("b" + (id).toString()).style.background = '#F53F3A';
  } else if (number > id) {
    for (var i = 0; i < id; i += 1) {
      document.getElementById("b" + (i).toString()).style.background = '#48e073';
    }
    document.getElementById("b" + (id).toString()).style.background = '#F53F3A';
  } else if (number == id) {
    document.getElementById("outLabel").innerHTML = ("Completed in <strong>" + (attempts + 1).toString() + "</strong> attempts.");
    startGame();
    return;
  }
  attempts += 1;
}