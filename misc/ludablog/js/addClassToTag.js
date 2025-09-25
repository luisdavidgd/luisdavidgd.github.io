function addClassToTag(tagName, className) {
  const elements = document.getElementsByTagName(tagName);
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add(className);
  }
}

function addClassToTagId(tagId, className) {
  const element = document.getElementById(tagId);
  element.classList.add(className);
}