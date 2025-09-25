## JS
```bash
cd /home/luda/Dev/github/luisdavidgd.github.io/misc/ludablog/js
```
```bash
cat themeIcon.js removeHtmlTag.js createSummaryAndThumb.js setViewTransitionName.js addClassToTag.js > bundle.js
```

```bash
uglifyjs bundle.js -o bundle.min.js -c -m
```

## CSS
```bash
cd /home/luda/Dev/github/luisdavidgd.github.io/misc/ludablog/css
```

```bash
cleancss -o bundle.min.css styles.css
```