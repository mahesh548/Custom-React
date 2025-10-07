function render(reactElements, rootElement) {
  const DomElement = createDomElement(reactElements);
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
  Object.entries(props).forEach(([key, value]) => {
    if (key != "children") DomElement[key] = value;
  });
  props.children.forEach((element) => {
    if (typeof element === "string") {
      const textNode = document.createTextNode(element);
      DomElement.append(textNode);
    } else {
      if (Array.isArray(element)) {
        DomElement.append(...element.map((el) => createDomElement(el)));
      } else {
        DomElement.append(createDomElement(element));
      }
    }
  });

  return DomElement;
}
export { render };
