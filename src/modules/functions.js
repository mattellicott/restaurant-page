export function addGoogleFontTo(element, fontName) {
  const link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute(
    "href",
    "https://fonts.googleapis.com/css?family=" + fontName,
  );

  document.head.appendChild(link);
  element.style.fontFamily = fontName;
}

export function makeElement(tagType, nameType, nameList, text) {
  const newElement = document.createElement(tagType);
  if (nameType && nameList)
    nameType == "id"
      ? (newElement.id = nameList)
      : nameType == "class"
      ? newElement.classList.add(nameList)
      : null;

  if (text) newElement.innerHTML = text;

  return newElement;
}
