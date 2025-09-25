const SUMMARY_WITHOUT_IMAGE = 350;
const SUMMARY_WITH_IMAGE = 275;

function createSummaryAndThumb(pID) {
  let article = document.getElementById(pID);
  let summary = article.getElementsByTagName('summary')[0];
  let imgtag = "";
  let img = summary.getElementsByTagName("img");
  if (img) {
    let summ = SUMMARY_WITHOUT_IMAGE;
    if (img.length >= 1) {
      imgtag = `<img src="${img[0].src}" class="featured-image" />`;
      summ = SUMMARY_WITH_IMAGE;
    }

    let result = imgtag + '<p>' + removeHtmlTag(summary.innerHTML, summ) + '</p>';
    summary.innerHTML = result;
  }
}