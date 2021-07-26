//global variables
const linebreak = document.createElement("br");
const waveformDiv = document.getElementById("waveform-div");

/*random color generator functions that will hopefully get used in the future
function getRandomColor() {
  let x = Math.floor(Math.random()*9);
  switch (x) {
    case 0:
      x = "crimson";
      break;
    case 1:
      x = "yellow";
      break;
    case 2:
      x = "green";
      break;
    case 3:
      x = "orange";
      break;
    case 4:
      x = "darkblue";
      break;
    case 5:
      x = "darkorchid";
      break;
    case 6:
      x = "beige";
      break;
    case 7:
      x = "cornsilk";
      break;
    case 8:
      x = "darkkhaki";
      break;
    case 9:
      x = "aqua";
      break;
    }
    return x;
    //document.getElementById("colorTest").style.backgroundColor = x;
}

function getRandomColor2() {
  let x = Math.floor(Math.random()*9);
  switch (x) {
    case 0:
      x = "rgb(46, 210, 52)";
      break;
    case 1:
      x = "rgb(29, 2, 245)";
      break;
    case 2:
      x = "rgb(238, 118, 19)";
      break;
    case 3:
      x = "rgb(247, 23, 138)";
      break;
    case 4:
      x = "rgb(255, 0, 27)";
      break;
    case 5:
      x = "rgb(235, 255, 0)";
      break;
    case 6:
      x = "rgb(125, 119, 199)";
      break;
    case 7:
      x = "rgb(139, 137, 148)";
      break;
    case 8:
      x = "rgb(48, 11, 48)";
      break;
    case 9:
      x = "rgb(121, 240, 197)";
      break;
    }
    return x;
    //document.getElementById("colorTest").style.backgroundColor = x;
}
*/

const colorDiv = document.getElementById("color-div");
const colorDivClick = document.getElementById("mood-text");
colorDivClick.addEventListener("click", function() {
  //colorDiv.style.backgroundColor = getRandomColor2();
  //colorDiv.style.backgroundImage = "linear gradient(blue, yellow)";
  colorDiv.style.animation = "mymove 5s infinite";
  colorDiv.style.animationDirection = "alternate";
});

/* color decay attempt
const box1 = document.getElementById("box1");
box1.addEventListener("click", function() {
  //box1.style.animation = "decay 2s";
  box1.style.backgroundColor = "cornsilk";
});
*/

//Trying to assign notes to boxes in a for loop
function createNotes() {
  for (let i=1; i<10; i++) {
  let note = new Audio(`Audio/C Pentanotes/${i}.mp3`);
  document.getElementById(`box${i}`).addEventListener("mousedown", function() {
    note.play();
  })
}
}

const musicBoxDiv = document.getElementById("music-boxes");
const musicBoxes = document.getElementsByClassName("grid-item");

/*newer way but can't quite crack it
function loadRandomWave() {
  const randomNumber = Math.floor(Math.random()*4);
  const waveAudio = document.createElement("audio");
  waveAudio.setAttribute("controls", "controls");
  switch (randomNumber) {
    case 0:
      waveAudio.src = "Audio/Waveforms/sine.mp3";
      //waveAudio.setAttribute("value", "Sine");
      break;
    case 1:
      waveAudio.src = "Audio/Waveforms/triangle.mp3";
      //waveAudio.setAttribute("value", "Triangle");
      break;
    case 2:
      waveAudio.src = "Audio/Waveforms/saw.mp3";
      //waveAudio.setAttribute("value", "Saw");
      break;
    case 3:
      waveAudio.src = "Audio/Waveforms/square.mp3";
      //waveAudio.setAttribute("value", "Square");
      break;
  }
  return waveAudio;
}
*/

function waveformGame() {

  const waveForm = document.createElement("form");
  waveForm.setAttribute('id', 'waveform-form');
  const waveAudio = document.createElement("audio");
  const randomNumber = Math.floor(Math.random()*4);
  waveAudio.setAttribute("controls", "controls");
  let waveKey;
  switch (randomNumber) {
    case 0:
      waveAudio.src = "Audio/Waveforms/sine.mp3";
      waveKey = "Sine";
      break;
    case 1:
      waveAudio.src = "Audio/Waveforms/triangle.mp3";
      waveKey = "Triangle";
      break;
    case 2:
      waveAudio.src = "Audio/Waveforms/saw.mp3";
      waveKey = "Saw";
      break;
    case 3:
      waveAudio.src = "Audio/Waveforms/square.mp3";
      waveKey = "Square";
      break;
  }
  waveForm.appendChild(waveAudio);
  waveForm.appendChild(linebreak);
  waveformDiv.appendChild(waveForm);
  const wavePrompt = document.createElement("p");
  const wavePromptText = document.createTextNode("Listen to the sound and guess the waveform..");
  wavePrompt.appendChild(wavePromptText);
  wavePrompt.style.fontSize = "1.4em";
  wavePrompt.style.color = "white";
  waveformDiv.appendChild(wavePrompt);

  const waveSelect = document.createElement("select");
  const sineOption = document.createElement("option");
  const triangleOption = document.createElement("option");
  const sawOption = document.createElement("option");
  const squareOption = document.createElement("option");
  waveSelect.style.fontSize = "1.1em";
  sineOption.text = "Sine";
  triangleOption.text = "Triangle";
  sawOption.text = "Saw";
  squareOption.text = "Square";
  waveSelect.options.add(sineOption, 0);
  waveSelect.options.add(triangleOption, 1);
  waveSelect.options.add(sawOption, 2);
  waveSelect.options.add(squareOption, 3);
  waveForm.appendChild(waveSelect);

  //return result to div 'waveform-game-result'
  const waveConfirm = document.createElement("input");
  const waveResult = document.createElement("div");
  waveConfirm.setAttribute("type", "button");
  waveConfirm.setAttribute("value", "Confirm Choice");
  waveConfirm.addEventListener("click", function() {
    const i = waveSelect.selectedIndex;
    if (waveSelect.options[i].text === waveKey) {
      waveResult.innerHTML = "You got it!";
    } else {
      waveResult.innerHTML = "Please try again"
    }
  });
  waveResult.style.fontSize = "1.4em";
  waveResult.style.color = "white";
  waveResult.style.padding = "12px";
  waveForm.appendChild(waveConfirm);
  waveForm.appendChild(waveResult);
  //reload button
  const reloadButton = document.createElement("input");
  reloadButton.setAttribute("type", "button");
  reloadButton.setAttribute("value", "Clear");
  reloadButton.addEventListener("click", function(){
    waveformDiv.innerHTML = "";
});
  waveConfirm.insertAdjacentElement("afterend", reloadButton);
  waveformDiv.appendChild(waveForm);
}
