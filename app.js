let a = document.querySelector(":root");
let rightSide = document.querySelector(".right-side");
let sidebar = document.querySelector(".sidebar");
let button = document.querySelector(".button");
let close_btn = document.querySelector(".close_btn");
let button_mobail = document.querySelector(".button_mobail");
let black_screen = document.querySelector(".black_screen");
let main = document.querySelector(".main");

let toggle = "open";

window.addEventListener("resize", () => {
  if (window.innerWidth < 980) {
    main.style.gridTemplateColumns = "0% 1fr";
    sidebar.style.transform = "translateX(-100vw)";
  } else {
    main.style.gridTemplateColumns = "30% 1fr";
    sidebar.style.transform = "translateX(0vw)";
    black_screen.style.display = "none";
  }
});

button.addEventListener("click", () => {
  if (toggle === "open") {
    main.style.gridTemplateColumns = "0% 1fr";
    sidebar.style.transform = "translateX(-100vw)";
    a.style.setProperty("font-size", "100%");
    toggle = "close";
    return;
  } else if (toggle === "close") {
    main.style.gridTemplateColumns = "30% 1fr";
    sidebar.style.transform = "translateX(0vw)";
    a.style.setProperty("font-size", "88%");
    toggle = "open";
    return;
  }
});

black_screen.addEventListener("click", () => {
  sidebar.style.transform = "translateX(-100vw)";
  black_screen.style.display = "none";
});

close_btn.addEventListener("click", () => {
  sidebar.style.transform = "translateX(-100vw)";
  black_screen.style.display = "none";
});
button_mobail.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0vw)";
  black_screen.style.display = "block";
});

function fun() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("name", "textInput");
  x.setAttribute("placeholder", "mid point");
  document.getElementById("myForm").appendChild(x);
}
