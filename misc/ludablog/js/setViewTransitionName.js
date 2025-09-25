function setViewTransitionName(pID) {
  let article = document.getElementById(pID);
  let img = article.getElementsByTagName('img')[0];
  if (img) {
    img.setAttribute('style', `view-transition-name: featured-${pID}`)
  }
}