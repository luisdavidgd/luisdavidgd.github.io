document.addEventListener("DOMContentLoaded", function () {
  var filter = document.querySelector('.main-navigationbwrap');
  if (!filter) return;

  var filterSpacer = document.createElement('div');
  filterSpacer.className = "filter-drop-spacer";
  filterSpacer.style.height = filter.offsetHeight + "px";

  var isSticky = false;

  window.addEventListener('scroll', function () {
    var filterTop = filter.getBoundingClientRect().top + window.scrollY;
    if (!isSticky && window.scrollY > filterTop) {
      filter.parentNode.insertBefore(filterSpacer, filter);
      filter.classList.add("fix");
      isSticky = true;
    } else if (isSticky && window.scrollY < filterSpacer.getBoundingClientRect().top + window.scrollY) {
      filter.classList.remove("fix");
      if (filterSpacer.parentNode) filterSpacer.parentNode.removeChild(filterSpacer);
      isSticky = false;
    }
  });
});