let text = document.getElementById("txt");

let submitBtn = document.getElementById("submit");
let resumeBtn = document.getElementById("resume");
let pauseBtn = document.getElementById("pause");
let audioMessage;

submitBtn.addEventListener("click", () => {
  audioMessage.text = text.value;
  window.speechSynthesis.speak(audioMessage);
});

resumeBtn.addEventListener("click", () => {
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";
  if (speechSynthesis.pause) {
    speechSynthesis.resume();
  }
});

pause.addEventListener("click", () => {
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";
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