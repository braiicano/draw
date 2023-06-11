const $ = (s) => document.querySelector(s);
const app = $("#app");
const colors = {
  red: "red",
  orange: "orange",
  yellow: "yellow",
  green: "green",
  blue: "blue",
  anil: "anil",
  purple: "purple",
  pink: "pink",
  brown: "brown",
  black: "black",
  white: "white",
  grey: "grey",
};

const print = (...text) => console.log(...text);
const error = (...text) => console.error(...text);
const len = (el) => el.length;
const getId = (a, b) => a.querySelector(b);
function useState(initial) {
  let state = initial;
  function setState(change) {
    state = change;
  }
  return [state, setState];
}
function render(parent, ...child) {
  for (let c of child)
    try {
      parent.appendChild(c);
    } catch {
      let _child = create(c);
      render(parent, _child);
    }
}

function create(...node) {
  function addProperties(elem, props) {
    for (let p in props) elem[p] = props[p];
  }
  const filter = (list) => list.slice(2);
  if (len(node) === 1) {
    return typeof node[0] === "string"
      ? document.createTextNode(node[0])
      : document.createElement(node[0]) || error(`${node[0]},no es válido`);
  } else {
    let element = document.createElement(node[0]);
    node[1] ? addProperties(element, node[1]) : 0;
    let listNode = filter(node);
    for (let n of listNode) render(element, n);
    return element;
  }
}

//elements
const btn = (id, text) =>
  create("button", { className: "color-btn", id }, text);
const panelColor = create(
  "div",
  { className: "color-panel", id: "panel" },
  btn(colors.red, "Rojo"),
  btn(colors.orange, "Naranja"),
  btn(colors.yellow, "Amarillo"),
  btn(colors.green, "Verde"),
  btn(colors.blue, "Azul"),
  btn(colors.anil, "Añil"),
  btn(colors.purple, "Violeta"),
  btn(colors.pink, "Rosa"),
  btn(colors.brown, "Marrón"),
  btn(colors.black, "Negro"),
  btn(colors.white, "Blanco"),
  btn(colors.grey, "Gris")
);
const space = () => create("span", { className: "draw-space" });
const tableDraw = create(
  "div",
  { className: "draw-panel", id: "draw" },
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space(),
  space()
);

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
  print("brush color:", brushColor);
});
