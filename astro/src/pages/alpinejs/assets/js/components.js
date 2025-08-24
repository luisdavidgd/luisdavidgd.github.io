async function initComponents(container = document) {
  const refs = Array.from(container.querySelectorAll('[x-component]'));
  const basePath = location.pathname.replace(/[^/]+$/, ''); // e.g. '/tools/color-customizer/'

  for (const el of refs) {
    const refName = el.getAttribute('x-component');
    const isCommon = refName.startsWith('common-');
    let html = '';

    // 1. Fetch the HTML content from the components folder
    try {
      const htmlPath = isCommon
        ? `/assets/components/${refName}.html`
        : `${basePath}components/${refName}.html`;

      const res = await fetch(htmlPath);
      if (!res.ok) throw new Error(`Failed to load HTML from: ${htmlPath}`);
      html = await res.text();
    } catch (err) {
      console.warn(`❌ Could not load HTML for '${refName}':`, err.message);
      continue;
    }

    // 2. Create a temporary container to manipulate embedded scripts
    const temp = document.createElement('div');
    temp.innerHTML = html;

    // 3. Manually execute embedded <script> tags
    const scripts = temp.querySelectorAll('script');
    scripts.forEach(script => {
      const newScript = document.createElement('script');
      if (script.src) {
        newScript.src = script.src;
      } else {
        newScript.textContent = script.textContent;
      }
      document.body.appendChild(newScript); // Execute the script
      script.remove(); // Clean up
    });

    // 4. Inject the remaining HTML content into the target element
    el.innerHTML = temp.innerHTML;

    // 🛠 Reflow fix: forces style recalculation (needed for Safari iOS to apply media queries like md:hidden)
    el.offsetHeight;

    // 🧠 Re-initialize Alpine.js for the newly inserted DOM
    if (window.Alpine && Alpine.initTree) {
      Alpine.initTree(el);
    }

    // 5. Load the component's JavaScript module, if available
    try {
      await import(`${basePath}components/${refName}.js`);
    } catch (err1) {
      try {
        await import(`/assets/components/${refName}.js`);
      } catch (err2) {
        console.info(`ℹ️ No JS module found for '${refName}', skipping.`);
      }
    }

    // try {
    //   const jsPath = isCommon
    //     ? `/assets/components/${refName}.js`
    //     : `${basePath}components/${refName}.js`;

    //   await import(jsPath);
    // } catch {
    //   console.info(`ℹ️ No JS module found for '${refName}', skipping.`);
    // }

    // 6. Recursively initialize nested x-components
    await initComponents(el);
  }
}
