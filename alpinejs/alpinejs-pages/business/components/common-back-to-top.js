document.querySelectorAll('[x-component="common-back-to-top"]').forEach(wrapper => {
  const icon = wrapper.dataset.icon;
  const a = wrapper.querySelector('p a')
  const span = wrapper.querySelector('p a span');
  if (span) {
    span.innerHTML = `<i class="${icon}"></i>`;
  }
  if (a) {
    a.classList = 'text-blue-600 text-3xl hover:text-blue-800 transition';
  }
});
