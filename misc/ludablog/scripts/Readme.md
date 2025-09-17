## JS
```bash
cd /home/luda/Dev/github/luisdavidgd.github.io/misc/ludablog/js
```
```bash
cat themeIcon.js stickyNav.js removeHtmlTag.js menuToggle.js createSummaryAndThumb.js > bundle.js
```

```bash
uglifyjs bundle.js -o bundle.min.js -c -m
```

## CSS
```bash
cd /home/luda/Dev/github/luisdavidgd.github.io/misc/ludablog/css
```
```bash
cat base/reset.css base/variables.css base/typography.css \
components/layout.css components/table.css components/card.css \
components/buttons.css components/about.css components/footer.css \
global.css > bundle.css
```
```bash
cat base/reset.css base/variables.css base/typography.css \
components/layout.css components/table.css components/card.css \
components/buttons.css components/about.css components/footer.css \
> bundle.css
```
```bash
cat bundle.css global.css > bundle-full.css
```
```bash
cleancss -o bundle.min.css bundle-full.css
```