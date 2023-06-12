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

const enlist = (node, args = 0) =>
  args ? node[args].childNodes : node.childNodes;
  
export { print, error, len, getId, create, render, useState, enlist };
