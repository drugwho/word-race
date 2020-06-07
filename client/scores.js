let scoreDisplay = sessionStorage.getItem("Score");
let nameDisplay = sessionStorage.getItem("Name");
let submitState = 0;
function removeElement(elementId) {
  // Removes an element from the document
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}
function addElement(parentId, elementTag, elementId, html) {
  // Adds an element to the document
  var p = document.getElementById(parentId);
  var newElement = document.createElement(elementTag);
  newElement.setAttribute("id", elementId);
  newElement.innerHTML = html;
  p.appendChild(newElement);
}
if (scoreDisplay === null) {
  document.getElementById("score").innerHTML = "PLAY THE GAME!";
  removeElement("name");
  removeElement("name2");
  removeElement("stats");
  removeElement("save");
  removeElement("again");
  removeElement("history");
  submitState = 1;
} else {
  document.getElementById("score").textContent = scoreDisplay;
}

function submitAndClear() {
  if (submitState == 0) {
    finalDisplay = scoreDisplay;
    nameDisplay2 = sessionStorage.getItem("Name");
    document.getElementById("score").textContent = `score saved!`;
    let toSend = { name: String(nameDisplay2), score: String(scoreDisplay) };
    console.log(JSON.stringify(toSend));
    if ("Name" in sessionStorage === false) {
      document.getElementById("score").textContent = "Enter Name";
    }
    if (submitState == 0 && "Name" in sessionStorage === true) {
      fetch("https://word-race.herokuapp.com/api/scores", {
        method: "POST",
        body: JSON.stringify(toSend),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      sessionStorage.clear();
      submitState = 1;
    } else {
      document.getElementById("score").textContent = "Enter Name";
      return;
    }
    // console.log("in function");
  }
}
document.getElementById("name").onkeyup = function () {
  var name = this.value;
  sessionStorage.setItem("Name", name);
};
let test = null;
const http = new XMLHttpRequest();

let obj;
let a;
fetch("https://word-race.herokuapp.com/api/scores")
  .then((res) => res.json())
  .then((data) => {
    obj = data;
    document.getElementById("avg").textContent = obj.avg;
    document.getElementById("max").textContent = obj.max;
    a = obj.lastThree;
    delete a[0]["__v"];
    delete a[1]["__v"];
    delete a[2]["__v"];
    delete a[0]["_id"];
    delete a[1]["_id"];
    delete a[2]["_id"];
    dispName1 = a[2]["name"];
    dispName2 = a[1]["name"];
    dispName3 = a[0]["name"];
    dispScore1 = a[2]["score"];
    dispScore2 = a[1]["score"];
    dispScore3 = a[0]["score"];
    p1String = `${dispName1}  - ${dispScore1}`;
    p2String = `${dispName2}  - ${dispScore2}`;
    p3String = `${dispName3}  - ${dispScore3}`;
    document.getElementById("p1").textContent = p1String;
    document.getElementById("p2").textContent = p2String;
    document.getElementById("p3").textContent = p3String;
  });
