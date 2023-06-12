import { code, panelColor, tableDraw } from "./draw.js";
import { getId, render, useState } from "./katan.js";
const $ = (s) => document.querySelector(s);
const app = $("#app");
var c = "";

render(app, panelColor);
render(app, tableDraw);

var [brushColor, setColor] = useState(getId(panelColor, "#red").id);
app.addEventListener("click", (e) => {
  let { target: elem } = e;
  if (elem.parentNode.id === "panel") {
    let actual = getId(panelColor, `#${elem.id}`);
    setColor(actual.id);
    brushColor = actual.id;
  } else if (elem.parentNode.id === "draw") {
    elem.className = `draw-space ${brushColor}`;
  } else {
  }
  c = (code(elem, "parentNode"));
});

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  panelColor.classList.toggle("hidden");
  tableDraw.classList.toggle("height");
});
