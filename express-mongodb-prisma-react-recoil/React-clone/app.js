const elementInfo = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
};

function createElement(elementInfo) {
  console.log("inside here");

  const { type, props } = elementInfo;
  const el = document.createElement(type);
  for (let key in props) {
    el.setAttribute(key, props[key]);
  }

  el.innerHTML = "Click me to visit Google";

  return el;
}

function customRender(elementInfo, container) {
  console.log("here");

  const el = createElement(elementInfo);
  console.log(el.href);

  container.appendChild(el);
}

const root = document.getElementById("root");
customRender(elementInfo, root);
