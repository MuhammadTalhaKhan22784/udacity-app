let a = document.querySelector(":root");
let rightSide = document.querySelector(".right-side");
let sidebar = document.querySelector(".sidebar");
let button = document.querySelector(".button");
let main = document.querySelector(".main");

let toggle = "open";

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

function addPoints() {
  var x = document.createElement("INPUT");
  var div = document.createElement('div')
  div.setAttribute('class','inp_div')
  x.setAttribute("type", "text");
  x.setAttribute("name", "textInput");
  x.setAttribute("placeholder", "mid point");
  div.appendChild(x)
  var span =document.createElement("span")
  var dlt = document.createElement("button");
  var dltText = document.createTextNode("\u00D7")
  dlt.appendChild(dltText)
  span.appendChild(dlt)
  dlt.setAttribute("class","dltBtn")
  dlt.setAttribute("onclick","dltRow(this)")
  div.appendChild(span)
  document.getElementById("myForm").appendChild(div);
}


function dltRow(e){
  e.parentNode.parentNode.remove()
}

let openSiderBarBtns = document.getElementById('openSiderBarBtn');
let rightSidebars = document.querySelector('.right-side-bars');
openSiderBarBtns.addEventListener('click', () => {
    rightSidebars.classList.toggle('rs_content')
});