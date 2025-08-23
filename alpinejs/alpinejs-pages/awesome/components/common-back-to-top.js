document.querySelectorAll('[x-component="common-back-to-top"]').forEach(wrapper => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#000">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
  </svg>`;

  const span = wrapper.querySelector('p a span');
  if (span) {
    span.innerHTML = svg;
  }

  // Access to element with ID = 'back-top'
  const backTopEl = wrapper.querySelector('#back-top');
  if (backTopEl) {
    // Change the bottom to 40px, for example
    backTopEl.style.bottom = '40px';

    // Or you can use an attribute like "data-bottom"
    // wrapper.getAttribute(data-bottom) or wrapper.dataset.bottom
    const customBottom = wrapper.dataset.bottom;
    if (customBottom) {
      backTopEl.style.bottom = customBottom;
    }
  }
});