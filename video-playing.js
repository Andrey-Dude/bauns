const firstVideo = document.getElementById("first-video");
const secondVideo = document.getElementById("second-video");
const thirdVideo = document.getElementById("third-video");
const fourthVideo = document.getElementById("fourth-video");

const firstVideoBox = document.getElementById("first-video-box");
const secondVideoBox = document.getElementById("second-video-box");
const thirdVideoBox = document.getElementById("third-video-box");
const fourthVideoBox = document.getElementById("fourth-video-box");

let isRewindFirst = false;
let isPausedFirst = false;

let isRewindSecond = false;
let isPausedSecond = false;

let isRewindThird = false;
let isPausedThird = false;

let isRewindFourth = false;
let isPausedFourth = false;

document.getElementById("first-video-box").addEventListener("click", () => {
  if (isRewindFirst == false && isPausedFirst == false) {
    firstVideoBox.classList.add("active-video");
    secondVideoBox.classList.remove("active-video");
    thirdVideo.classList.remove("active-video");
    fourthVideoBox.classList.remove("active-video");
    firstVideo.muted = false;
    secondVideo.muted = true;
    thirdVideo.muted = true;
    fourthVideo.muted = true;
    firstVideo.currentTime = 0;
    firstVideo.play();
    secondVideo.play();
    thirdVideo.play();
    fourthVideo.play();
    isRewindFirst = true;
    isRewindSecond = false;
    isRewindThird = false;
    isRewindFourth = false;
  } else if (isRewindFirst == true && isPausedFirst == false) {
    firstVideo.pause();
    isPausedFirst = true;
    isPausedSecond = false;
    isPausedThird = false;
    isPausedFourth = false;
  } else if (isRewindFirst == true && isPausedFirst == true) {
    firstVideo.play();
    isPausedFirst = false;
  }
});

document.getElementById("second-video-box").addEventListener("click", () => {
  if (isRewindSecond == false && isPausedSecond == false) {
    firstVideoBox.classList.remove("active-video");
    secondVideoBox.classList.add("active-video");
    thirdVideo.classList.remove("active-video");
    fourthVideoBox.classList.remove("active-video");
    firstVideo.muted = true;
    secondVideo.muted = false;
    thirdVideo.muted = true;
    fourthVideo.muted = true;
    secondVideo.currentTime = 0;
    firstVideo.play();
    secondVideo.play();
    thirdVideo.play();
    fourthVideo.play();
    isRewindFirst = false;
    isRewindSecond = true;
    isRewindThird = false;
    isRewindFourth = false;
  } else if (isRewindSecond == true && isPausedSecond == false) {
    secondVideo.pause();
    isPausedFirst = false;
    isPausedSecond = true;
    isPausedThird = false;
    isPausedFourth = false;
  } else if (isRewindSecond == true && isPausedSecond == true) {
    secondVideo.play();
    isPausedSecond = false;
  }
});

document.getElementById("third-video-box").addEventListener("click", () => {
  if (isRewindThird == false && isPausedThird == false) {
    firstVideoBox.classList.remove("active-video");
    secondVideoBox.classList.remove("active-video");
    thirdVideo.classList.add("active-video");
    fourthVideoBox.classList.remove("active-video");
    firstVideo.muted = true;
    secondVideo.muted = true;
    thirdVideo.muted = false;
    fourthVideo.muted = true;
    thirdVideo.currentTime = 0;
    firstVideo.play();
    secondVideo.play();
    thirdVideo.play();
    fourthVideo.play();
    isRewindFirst = false;
    isRewindSecond = false;
    isRewindThird = true;
    isRewindFourth = false;
  } else if (isRewindThird == true && isPausedThird == false) {
    thirdVideo.pause();
    isPausedFirst = false;
    isPausedSecond = false;
    isPausedThird = true;
    isPausedFourth = false;
  } else if (isRewindThird == true && isPausedThird == true) {
    thirdVideo.play();
    isPausedThird = false;
  }
});

document.getElementById("fourth-video-box").addEventListener("click", () => {
  if (isRewindFourth == false && isPausedFourth == false) {
    firstVideoBox.classList.remove("active-video");
    secondVideoBox.classList.remove("active-video");
    thirdVideo.classList.remove("active-video");
    fourthVideoBox.classList.add("active-video");
    firstVideo.muted = true;
    secondVideo.muted = true;
    thirdVideo.muted = true;
    fourthVideo.muted = false;
    fourthVideo.currentTime = 0;
    firstVideo.play();
    secondVideo.play();
    thirdVideo.play();
    fourthVideo.play();
    isRewindFirst = false;
    isRewindSecond = false;
    isRewindThird = false;
    isRewindFourth = true;
  } else if (isRewindFourth == true && isPausedFourth == false) {
    fourthVideo.pause();
    isPausedFirst = false;
    isPausedSecond = false;
    isPausedThird = false;
    isPausedFourth = true;
  } else if (isRewindFourth == true && isPausedFourth == true) {
    fourthVideo.play();
    isPausedFourth = false;
  }
});

firstVideo.addEventListener("ended", function (event) {
  this.play();
  if (this.muted == false) {
    firstVideoBox.classList.remove("active-video");
    this.muted = true;
    isRewindFirst = false;
    isPausedFirst = false;
  }
});

secondVideo.addEventListener("ended", function (event) {
  this.play();
  if (this.muted == false) {
    secondVideoBox.classList.remove("active-video");
    this.muted = true;
    isRewindSecond = false;
    isPausedSecond = false;
  }
});

thirdVideo.addEventListener("ended", function (event) {
  this.play();
  if (this.muted == false) {
    thirdVideoBox.classList.remove("active-video");
    this.muted = true;
    isRewindThird = false;
    isPausedThird = false;
  }
});

fourthVideo.addEventListener("ended", function (event) {
  this.play();
  if (this.muted == false) {
    fourthVideoBox.classList.remove("active-video");
    this.muted = true;
    isRewindFourth = false;
    isPausedFourth = false;
  }
});
