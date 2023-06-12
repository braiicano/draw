import { create, enlist, error } from "./katan.js";
const colors = {
  red: "red",
  orange: "orange",
  yellow: "yellow",
  darkyellow: "darkyellow",
  green: "green",
  darkgreen: "darkgreen",
  bluelight: "bluelight",
  blue: "blue",
  anil: "anil",
  purple: "purple",
  pink: "pink",
  brown: "brown",
  black: "black",
  white: "white",
  grey: "grey",
  greenlight: "greenlight",
  beige: "beige",
};

const btn = (id, text) =>
  create("button", { className: "color-btn", id }, text);
export const panelColor = create(
  "div",
  { className: "color-panel", id: "panel" },
  btn(colors.red, " "),
  btn(colors.orange, " "),
  btn(colors.yellow, " "),
  btn(colors.darkyellow, " "),
  btn(colors.greenlight, " "),
  btn(colors.green, " "),
  btn(colors.blue, " "),
  btn(colors.anil, " "),
  btn(colors.purple, " "),
  btn(colors.pink, " "),
  btn(colors.beige, " "),
  btn(colors.brown, " "),
  btn(colors.black, " "),
  btn(colors.white, " "),
  btn(colors.darkgreen, " "),
  btn(colors.bluelight, " ")
);

const space = () => create("span", { className: "draw-space white" });
const lsSpace = [
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
];
export const tableDraw = create(
  "div",
  { className: "draw-panel", id: "draw" },
  ...lsSpace
);

export function code(element, args) {
  let _code = "";
  let list = enlist(element, args);
  list.forEach((e) => {
    const q = (s) => e.className.includes(s);
    q(colors.red)
      ? (_code += 0)
      : q(colors.orange)
      ? (_code += 1)
      : q(colors.yellow)
      ? (_code += 2)
      : q(colors.darkyellow)
      ? (_code += 3)
      : q(colors.green)
      ? (_code += 4)
      : q(colors.darkgreen)
      ? (_code += 5)
      : q(colors.bluelight)
      ? (_code += 6)
      : q(colors.blue)
      ? (_code += 7)
      : q(colors.anil)
      ? (_code += 8)
      : q(colors.purple)
      ? (_code += 9)
      : q(colors.pink)
      ? (_code += "A")
      : q(colors.brown)
      ? (_code += "B")
      : q(colors.black)
      ? (_code += "C")
      : q(colors.white)
      ? (_code += "D")
      : q(colors.grey)
      ? (_code += "E")
      : q(colors.greenlight)
      ? (_code += "F")
      : q(colors.beige)
      ? (_code += "G")
      : error("No existe código");
  });
  return _code;
}
