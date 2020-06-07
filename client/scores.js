scoreDisplay = sessionStorage.getItem("Score");
document.getElementById("score").textContent = scoreDisplay;
let submitState = 0;
function submitAndClear() {
  // code to submit;
  if (submitState == 0) {
    finalDisplay = scoreDisplay;
    nameDisplay = document.getElementById("name").value;
    document.getElementById(
      "score"
    ).textContent = `${nameDisplay} - ${finalDisplay} \n score saved`;
    sessionStorage.clear();
    submitState = 1;
    console.log("in function");
  }
}
document.getElementById("name").onkeyup = function () {
  var name = this.value;
  sessionStorage.setItem("Name", name);
};
const http = new XMLHttpRequest();

http.open("GET", "https://word-race.herokuapp.com/");
http.send();

http.onload = () => console.log(http.responseText);
