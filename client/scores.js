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

async function fetchAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
let a = fetchAsync("'https://jsonplaceholder.typicode.com/todos/1");
console.log(a);
