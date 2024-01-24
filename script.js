let text = document.getElementById("txt");

let submitBtn = document.getElementById("submit");
let resumeBtn = document.getElementById("resume");
let pauseBtn = document.getElementById("pause");
let audioMessage;

submitBtn.addEventListener("click", () => {
  //set the text
  audioMessage.text = text.value;
  //speak the text
  window.speechSynthesis.speak(audioMessage);
});

resumeBtn.addEventListener("click", () => {
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";
  //resume the audio if it is paused
  if (speechSynthesis.pause) {
    speechSynthesis.resume();
  }
});

pause.addEventListener("click", () => {
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";
  //pause if speaking
  speechSynthesis.speaking ? speechSynthesis.pause() : "";
});

window.onload = () => {
  resumeBtn.style.display = "none";
  if ("speechSynthesis" in window) {
    audioMessage = new SpeechSynthesisUtterance();
  } else {
    alert("Speech Synthese is not supported");
  }
};