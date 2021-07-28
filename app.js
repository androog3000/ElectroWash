//global variables
const linebreak = document.createElement("br");
const waveformDiv = document.getElementById("waveform-div");


//Synth page read more expand functions using template literals
function readMoreSynth() {
for (let i=1;i<=4;i++) {
  let button = document.getElementById(`synth-button-${i}`);
  let expand = document.getElementById(`synth-expand-${i}`);
  button.addEventListener("click", function() {
    switch (i) {
      case 1:
        if (!expand.innerHTML) {
          expand.style.display = "block";
          expand.innerHTML = `While more of a sequencer and sampler than a traditional synthesizer,
            the Elektron Digitakt is an excellent tool for creativity, allowing you to import your own sounds and
            manipulate and layer them until you've got something truly original.  Some electronic instruments
            allow you seemlessly take an idea from your head and recreate it through the medium of the instrument.
            The Digitakt is unlikely to be one of those because it forces you to work within its rules and confines.
            However this can be extremely rewarding as you are guaranteed to end up somewhere you would not have otherwise imagined.`;
      } else {
        expand.style.display = "none";
        expand.innerHTML = "";
      }
        break;
      case 2:
          if (!expand.innerHTML) {
            expand.style.display = "block";
            expand.innerHTML = `While some may call them boring waveforms, I often turn to classic sine waves
             and run them through a VCA with a short, plucky envelope.  In this case we have two oscillators
             each with a sequence controlling its pitch.  These two melodies then run through a delay unit
             which adds a nice rhythmic effect as well as stereo ambience.`;
        } else {
          expand.style.display = "none";
          expand.innerHTML = "";
        }
          break;
      case 3:
          if (!expand.innerHTML) {
            expand.style.display = "block";
            expand.innerHTML = `Here we have another example of oscillators run through VCAs with short, plucky envelopes.
            This techinque can make simple waveforms more interesting and it can also tame more complex waveforms into
             something pleasant and percussive as evidenced by the sound that's almost reminiscient of a gentle beating
             of a bongo drum.  Also, there's a bird that obstructed my view as I was sitting in Dolores Park and trying
             to film the sun, as one does.`;
        } else {
          expand.style.display = "none";
          expand.innerHTML = "";
        }
          break;
      case 4:
          if (!expand.innerHTML) {
            expand.style.display = "block";
            expand.innerHTML = `The layers involved are the nice,
            rich lead sound from the Moog Grandmother, another simple, plucky melodic voice from the
            Make Noise 0-Coast, and the more complex, rhythmic whirling sound from the eurorack
            skiff whose primary sound source is a Make Noise Dual Primary Oscillator (DPO) which in
            this case is being used for its main purpose, FM synthesis.`;
        } else {
            expand.style.display = "none";
            expand.innerHTML = "";
        }
          break;
    }
  });
}
}

//softare page read more expand functions
function readMoreSoftware() {
for (let j=1;j<=4;j++) {
  let button = document.getElementById(`software-button-${j}`);
  let expand = document.getElementById(`software-expand-${j}`);
  button.addEventListener("click", function() {
    switch (j) {
      case 1:
        if (!expand.innerHTML) {
          expand.style.display = "block";
          expand.innerHTML = `MIDI, or Musical Instrsument Digital Interface, is a technology protocol
          that can do many things to connect digital instruments. Among the most basic and important
          features is to send a melodic sequence of notes from one source to another.
          In this case we have a melody created in Ableton Live, which is sent out of the computer
          through USB into a Korg SQ-1, which converts this digital melody into voltage which drives
          an analog oscillator. Utilizing this kind of conversion can provide us with both a lovely
          bit of electronic music as well as a fun visual accompaniment.`;
      } else {
        expand.style.display = "none";
        expand.innerHTML = "";
      }
        break;
      case 2:
          if (!expand.innerHTML) {
            expand.style.display = "block";
            expand.innerHTML = `This is a quick demo of one of my favorite plug-ins: the Eventide H3000 Band Delays.
             It's basically an advanced delay effect which can create different timed delays that echo different
             filtered portions of the incoming sound. One way to get more out of this plug-in is to utilize the
             LFOs available within Ableton Live's Max for Live. The LFOs are essentially free running modulation
             sources and connecting them to the different bands within the plug-in allows for a great deal of movement
             that would otherwise not be possible.  Of course parameter automation within any DAW would achieve a similar
             effect, but utilizing the Max for Live LFOs feels more synth-like, and is just more fun.`;
        } else {
          expand.style.display = "none";
          expand.innerHTML = "";
        }
          break;
      case 3:
          if (!expand.innerHTML) {
            expand.style.display = "block";
            expand.innerHTML = `Here we're just having fun making a beat in Ableton Live.  One instrument is the
             Wavetable synthesizer which comes with Ableton Live Suite. Sending it notes one of my favorite
             Max for Live devices called the MDD Snake, which is inspired by the Make Noise Rene eurorack sequencer.
             I like this device because it adds several features that are much more easily achieved in a computer device.
             It includes a random button which can reset all the note values. As long as we quantize these notes to a scale
             of some kind, the randomized notes will always generate a pleasant pattern. One further trick I like is connect a
             Max for Live square wave LFO to the randomize button, and then sync the LFO to the tempo of the song.
             This can allow you to completely change the notes of the sequence after a certain duration like 4 or 8 bars,
             and it will do so automatically. The other prominent synth sound in this video is a gliding sound. This is achieved
             by altering the time division of the Ableton Echo device. Again this time change can be controlled by a Max for Live LFO
             which will do this automatically and create electronic music which feels generative.`;
        } else {
          expand.style.display = "none";
          expand.innerHTML = "";
        }
          break;
      case 4:
          if (!expand.innerHTML) {
            expand.style.display = "block";
            expand.innerHTML = `I was a little skeptical when Reason 11 was announced with one of its main features being
            the whole program could be used as a plug-in within another program. I finally came to my senses and
            realized this was an incredible idea. Reason devices are so fun to use and can really spur your
            creativity especially when you are looking to break out of a routine for making music. At this point,
            Ableton Live has by far my favorite workflow of any DAW I'm familiar with, however one of its weaknesses
            is its built-in instruments. Most people will turn to external, hardware synths, as do I, but there
            is something fun sometimes about working "in the box", that is not leaving the computer, and feeling
            like all the tools you need (and have) are just a keypress or drag on the trackpad away. In this video,
            I was utilizing Reason's excellent Complex-1 Rack Extension device which is inspired by old west-cost
            style modular systems. It's fun to use, it sounds cool, the virtual patching is very familiar for a
            fan of eurorack, and being able to use it within Ableton Live makes for an excellent source of inspiration.`;
        } else {
            expand.style.display = "none";
            expand.innerHTML = "";
        }
          break;
    }
  });
}
}


//Film page read more expand functions using template literals
function readMoreFilm() {
for (let i=1;i<=4;i++) {
  let button = document.getElementById(`film-button-${i}`);
  let expand = document.getElementById(`film-expand-${i}`);
  button.addEventListener("click", function() {
    switch (i) {
      case 1:
        if (!expand.innerHTML) {
          expand.style.display = "block";
          expand.innerHTML = `This score again highlights the magic of modular synthesizers
          which provide the main hook. After this sound seemingly took shape out of nowhere,
          I recorded it into a clip slot in Ableton Live and added a drum beat and out of tune
          vocal harmonies just for good measure.`;
      } else {
        expand.style.display = "none";
        expand.innerHTML = "";
      }
        break;
      case 2:
          if (!expand.innerHTML) {
            expand.style.display = "block";
            expand.innerHTML = `Probably the background score that is the least relient on synthesizers to be
            featured on Electro Wash to date. Here we've got several layers of nylon string
            guitar with the most prominent being two harmonizing lead lines which basically just
            imply the main harmony. We're then joined by chords from the Prophet Rev2 and a simple beat
            utilizing an Ableton stock CR-78 sample kit.`;
        } else {
          expand.style.display = "none";
          expand.innerHTML = "";
        }
          break;
      case 3:
          if (!expand.innerHTML) {
            expand.style.display = "block";
            expand.innerHTML = `Among the key features here are percussive modular synth notes which
            complement pitched percussive elements from an Ableton Live drum kit.  The highest voice
            came from the same modular system and utilized some glide courtesy the Make Noise Maths
            module.  I don't quite know what it is, but that upper voice with its prominent glide just
            feels a bit aquatic.`;
        } else {
          expand.style.display = "none";
          expand.innerHTML = "";
        }
          break;
      case 4:
          if (!expand.innerHTML) {
            expand.style.display = "block";
            expand.innerHTML = `Another classic patch two melodic lines both featuring simple waveforms
            with short, plucky envelopes but here we've got a little extra hot sauce on top from one of
            favorite plug-ins: the Soundtoys Crystallizer.  What is essentially a pitched delay unit
            capable of feedback loops that further pitch the pitched delays, the Crystallizer is great
            for adding that little bit of twinkle, or dare I say sparkle.`;
        } else {
            expand.style.display = "none";
            expand.innerHTML = "";
        }
          break;
    }
  });
}
}

//Software page read more expand functions using template literals
/*
for (let i=1;i<=4;i++) {
  let buttonSoft = document.getElementById(`software-button-${i}`);
  let softwareExpand = document.getElementById(`software-expand-${i}`);
  buttonSoft.addEventListener("click", function() {
    switch (i) {
      case 1:
        if (!softwareExpand.innerHTML) {
          softwareExpand.style.display = "block";
          softwareExpand.innerHTML = "Further description for software 1";
      } else {
        softwareExpand.style.display = "none";
        softwareExpand.innerHTML = "";
      }
        break;
      case 2:
          if (!softwareExpand.innerHTML) {
            softwareExpand.style.display = "block";
            softwareExpand.innerHTML = "Further description for software 2";
        } else {
          softwareExpand.style.display = "none";
          softwareExpand.innerHTML = "";
        }
          break;
      case 3:
          if (!softwareExpand.innerHTML) {
            softwareExpand.style.display = "block";
            softwareExpand.innerHTML = "Further description for software 3";
        } else {
          softwareExpand.style.display = "none";
          softwareExpand.innerHTML = "";
        }
          break;
      case 4:
          if (!synthExpand.innerHTML) {
            softwareExpand.style.display = "block";
            softwareExpand.innerHTML = "Further description for block 4";
        } else {
            softwareExpand.style.display = "none";
            softwareExpand.innerHTML = "";
        }
          break;
    }
  });
}
*/

/* Read more expand functions using highly inefficient code
const synthButton1 = document.getElementById("synth-button-1");
const synthExpand1 = document.getElementById("synth-expand-1");
synthButton1.addEventListener("click", function() {
  if (!synthExpand1.innerHTML) {
    synthExpand1.style.display = "block";
    synthExpand1.innerHTML = `While more of a sequencer and sampler than a traditional synthesizer,
    the Elektron Digitakt is an excellent tool for creativity, allowing you to import your own
    sounds and manipulate and layer them until you've got something truly original.
    Some electronic instruments allow you seemlessly take an idea from your head and recreate
    it through the medium of the instrument. The Digitakt is unlikely to be one of those because
    it forces you to work within its rules and confines.However this can be extremely rewarding
    as you are guaranteed to end up somewhere you would not have otherwise imagined.`;
  } else {
    synthExpand1.style.display = "none";
    synthExpand1.innerHTML = "";
  }
});

const synthButton2 = document.getElementById("synth-button-2");
const synthExpand2 = document.getElementById("synth-expand-2");
synthButton2.addEventListener("click", function() {
  if (!synthExpand2.innerHTML) {
    synthExpand2.style.display = "block";
    synthExpand2.innerHTML = `Here we've got a classic patch of mine.  While some may call them
    boring waveforms, I often turn to classic sine waves and run them through a VCA with a short,
    plucky envelope.  In this case we have two oscillators each with a sequence controlling its pitch.
    These two melodies then run through a delay unit which adds a nice rhythmic effect as well as stereo ambience.`;
  } else {
    synthExpand2.style.display = "none";
    synthExpand2.innerHTML = "";
  }
});

const synthButton3 = document.getElementById("synth-button-3");
const synthExpand3 = document.getElementById("synth-expand-3");
synthButton3.addEventListener("click", function() {
  if (!synthExpand3.innerHTML) {
    synthExpand3.style.display = "block";
    synthExpand3.innerHTML = `Here we have another example of oscillators run through VCAs
    with short, plucky envelopes.  This techinque can make simple waveforms more interesting
    and it can also tame more complex waveforms into something pleasant and percussive as
    evidenced by the sound that's almost reminiscient of a gentle beating of a bongo drum.
    Also, there's a bird that obstructed my view as I was just trying to film the sun while
    sitting in Dolores Park, as one does.`;
  } else {
    synthExpand3.style.display = "none";
    synthExpand3.innerHTML = "";
  }
});

const synthButton4 = document.getElementById("synth-button-4");
const synthExpand4 = document.getElementById("synth-expand-4");
synthButton4.addEventListener("click", function() {
  if (!synthExpand4.innerHTML) {
    synthExpand4.style.display = "block";
    synthExpand4.innerHTML = `There's a bit more to unpack here but the layers involved are the nice,
    rich lead sound from the Moog Grandmother, another simple melodic voice from the Make Noise 0-Coast,
    and the more complex, rhythmic whirling sound from the eurorack skiff whose primary sound source is a
    Make Noise Dual Primary Oscillator (DPO).  The goal here is to create sound layers that are very distinct
    and can then coexist and still be heard when mixed together.  Of course layers of synthesizers
    coexisting tastefully is extremly subjective.`;
  } else {
    synthExpand4.style.display = "none";
    synthExpand4.innerHTML = "";
  }
});
*/

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

//COLOR DIV TEMPORARILY OUT OF COMMISH DON'T FORGET ME!!!
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

if (!document.getElementById("waveform-div").innerHTML) {
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
} else {
  document.getElementById("waveform-div").innerHTML = "";
}
}
