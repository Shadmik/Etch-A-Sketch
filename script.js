let father = document.querySelector("#father");
let button = document.querySelector("#clear");
button.addEventListener("click", createGrid);
let a, b;

/*Everybody will see this after clicking button */

function createGrid() {
  function remove() {
    let ray = document.querySelectorAll("#small");
    ray.forEach((s) => {
      father.removeChild(s);
    });
  }
  remove();
  a = prompt("When enough is enough?", "10");
  b = Number(a);
  father.setAttribute(
    "style",
    "display: grid; background: #fccd49; height: 70vh; width: 70vh; margin: 0px auto;"
  );
  father.style.gridTemplateColumns = `repeat(${b}, 1fr)`;
  father.style.gridTemplateRows = `repeat(${b}, 1fr)`;
  for (let i = 0; i < b * b; i++) {
    let smalldiv = document.createElement("div");
    smalldiv.id = "small";
    smalldiv.setAttribute("style", "background: red; border: 1px solid black;");
    smalldiv.addEventListener("mouseover", () => {
      let chooseColor = ["#000000", "yellow"];
      function color() {
        let f = chooseColor[Math.floor(Math.random() * chooseColor.length)];
        return f;
      }
      smalldiv.style.background = color();
    });
    father.appendChild(smalldiv);
  }
}
/* Every body will see this firstly */
function firstly() {
  father.setAttribute(
    "style",
    "display: grid; background: #fccd49; height: 70vh; width: 70vh; margin: 0px auto;"
  );
  father.style.gridTemplateColumns = `repeat(16, 1fr)`;
  father.style.gridTemplateRows = `repeat(16, 1fr)`;

  for (let i = 0; i < 16 * 16; i++) {
    let smalldiv = document.createElement("div");
    smalldiv.id = "small";
    smalldiv.setAttribute("style", "background: red; border: 1px solid black;");
    smalldiv.addEventListener("mouseover", () => {
      let chooseColor = ["#000000", "yellow"];
      function color() {
        let f = chooseColor[Math.floor(Math.random() * chooseColor.length)];
        return f;
      }
      smalldiv.style.background = color();
    });
    father.appendChild(smalldiv);
  }
}
firstly();
function remove() {
  let ray = document.querySelectorAll("#small");
  ray.forEach((s) => {
    father.removeChild(s);
  });
}
