export function render(reactElements, rootElement) {
  const DomElement = createDomElement(reactElements);
  document.getElementById("root").innerHTML = "";
  if (Array.isArray(DomElement)) {
    rootElement.append(...DomElement);
  } else {
    rootElement.append(DomElement);
  }
}
function createDomElement(reactElements) {
  if (Array.isArray(reactElements)) {
    return reactElements.map((element) => createDomElement(element));
  }

  if (typeof reactElements === "string") {
    const DomElement = document.createTextNode(reactElements);
    return DomElement;
  }

  const { type, props } = reactElements;

  if (typeof type === "function") {
    return createDomElement(type(props));
  }

  const DomElement = document.createElement(type);

  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      if (key == "style") {
        Object.entries(value).forEach(([style, styleValue]) => {
          DomElement.style[style] = styleValue;
        });
      }
      if (key != "children" && key != "style") {
        DomElement[key] = value;
      }
    });
    props.children?.forEach((element) => {
      if (Array.isArray(element)) {
        DomElement.append(...element.map((el) => createDomElement(el)));
      } else if (typeof element?.type === "string") {
        DomElement.append(createDomElement(element));
      } else {
        const textNode = document.createTextNode(element);
        DomElement.append(textNode);
      }
    });
  }

  return DomElement;
}
