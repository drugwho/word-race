document.getElementById("change-make").textContent = "";
defaultScore = "100";
scoreText = document.getElementById("score");
scoreText.textContent = "100";
temp = document.getElementById("change-make").textContent;

let giveText = document.getElementById("words-array");

let words = document
  .getElementById("words-array")
  .textContent.trim()
  .split(" ");

let combo = 0;
let multiplier = 1;
let multiplierText = document.getElementById("multiplier");

multiplierText.textContent = `${multiplier}x`;

stackspace = 7;
let times = new Array();
let times2 = new Array();
nowTime = Date.now();
times.push(nowTime);

function giveWords() {
  l =
    "live ensure fork offense statement rise rugby reality junior trace second bag rabbit embarrassment partnership retailer piano bark fountain create medal gown listen clock loop missile recover stop use auction presidency headline prevalence weave litigation even attack proof teenager ignore fee bolt bronze warning question dialect state rank elephant tip ";
  l = l.split(" ");
  randomInt = Math.floor(Math.random() * 49);
  return l[randomInt];
}
// rate is not getting updated
let rate = 3000;
let timer = setInterval(function getWords() {
  if (words.length < stackspace) {
    giveText.textContent += ` ${giveWords()}`;
    rate *= 0.1;
    // console.log(rate);
    words = document
      .getElementById("words-array")
      .textContent.trim()
      .split(" ");
  } else {
    clearInterval(timer);
    // console.log("done!");
    words = new Array();
    sessionStorage.setItem("Score", defaultScore);
    document.getElementById("words-array").textContent = "";
    document.getElementById("words-array").textContent = "Game Over";
    document.getElementById("change-make").textContent = "Hit Submit!";
    console.clear()(
      // document.getElementById("change-make").textContent =
      "Game Over. Hit Submit!"
    );
    document.onkeydown = function (e) {
      return false;
    };
  }
}, rate);

let count = 0;
let letterCount = 0;

// input Start
document.addEventListener("keydown", (e) => {
  try {
    let key = document.getElementById(`${e.code}`);
    if (e.key == "Backspace") {
      e.preventDefault();
    }
    if (e.key != "Enter") {
      if (e.key != "Backspace") {
        if (e.key == words[count][letterCount]) {
          key.classList.add("keypressed");
          temp += e.key;
          document.getElementById("change-make").textContent = temp;
          letterCount += 1;
        } else {
          combo = 0;
          multiplier = 1;
          var snd = new Audio("error.wav"); // buffers automatically when created
          snd.play();
          multiplierText.textContent = `${multiplier}x`;
          key.classList.add("wrong-key-pressed");
        }
      }
    }
    if (e.key == "Enter") {
      if (temp == words[0]) {
        endTime = Date.now() - nowTime;

        times.push(endTime / 1000);

        nowTime = Date.now();

        temp = "";
        document.getElementById("change-make").textContent = "";
        words.shift();
        document.getElementById("words-array").textContent = words.join(" ");
        letterCount = 0;
        combo += 1;
        console.log(times);
        if (combo == 5) {
          multiplier += 1;
          multiplierText.textContent = `${multiplier}x`;
          combo = 0;
        }
        times.push(endTime / 1000);
        console.log("is this even right?");
        scoreTemp = Number(defaultScore);
        scoreTemp += (21 - Math.floor(times[times.length - 1])) * multiplier;
        defaultScore = String(scoreTemp);
        console.log(defaultScore);
        document.getElementById("score").textContent = String(defaultScore);
        nowTime = Date.now();
      }
    }
  } catch (error) {}
});
document.addEventListener("keyup", (e) => {
  try {
    let key = document.getElementById(`${e.code}`);
    setTimeout(() => {
      key.classList.remove("keypressed");
      key.classList.remove("wrong-key-pressed");
    }, 100);
  } catch (error) {}
});
