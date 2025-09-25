function createSummaryAndThumb(pID) {
  let article = document.getElementById(pID);
  let summary = article.getElementsByTagName('summary')[0];
  let imgtag = "";
  let img = summary.getElementsByTagName("img");
  if (img) {
    let summ = summary_noimg;
    if (img.length >= 1) {
      imgtag = `<img src="${img[0].src}" class="featured-image"/>`;
      summ = summary_img;
    }

    let result = imgtag + '<p>' + removeHtmlTag(summary.innerHTML, summ) + '</p>';
    summary.innerHTML = result;
  }
}