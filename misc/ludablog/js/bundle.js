document.addEventListener("DOMContentLoaded", function () {
  const theme = (() => {
    const localStorageTheme = localStorage?.getItem("theme") ?? "";
    if (["dark", "light"].includes(localStorageTheme)) {
      return localStorageTheme;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  })();

  if (theme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }

  window.localStorage.setItem("theme", theme);

  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");
    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", handleToggleClick);
  }
});function removeHtmlTag(strx, chop) {
  if (strx.indexOf("<") != -1) {
    var s = strx.split("<");
    for (var i = 0; i < s.length; i++) {
      if (s[i].indexOf(">") != -1) {
        s[i] = s[i].substring(s[i].indexOf(">") + 1, s[i].length);
      }
    }
    strx = s.join("");
  }
  chop = (chop < strx.length - 1) ? chop : strx.length - 2;
  while (strx.charAt(chop - 1) != ' ' && strx.indexOf(' ', chop) != -1) chop++;
  strx = strx.substring(0, chop - 1);
  return strx + '...';
}document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById('site-navigationbwrap');
  var button = document.getElementById('menuToggle');
  var menu = container.getElementsByTagName('ul')[0];

  if (!container || !button || !menu) return;

  if (-1 === menu.className.indexOf('nav-menu'))
    menu.className += ' nav-menu';

  button.onclick = function () {
    if (container.classList.contains('toggled')) {
      container.classList.remove('toggled');
      button.classList.remove('open');
    } else {
      container.classList.add('toggled');
      button.classList.add('open');
    }
  };
});function createSummaryAndThumb(pID) {
  var div = document.getElementById(pID);
  var imgtag = "";
  var img = div.getElementsByTagName("img");
  if(img) {
    var summ = summary_noimg;
  if (img.length >= 1) {
    imgtag = '<img src="' + img[0].src + '" class="pbtthumbimg"/>';
    summ = summary_img;
  }

  var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML, summ) + '</div>';
  div.innerHTML = summary;
  }
}