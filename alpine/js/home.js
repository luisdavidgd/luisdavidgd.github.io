function home() {
  let typingInterval;

  function startTyping(data) {
    let current = data.textArray[data.textIndex];

    if (data.charIndex > current.length) {
      data.direction = 'backward';
      clearInterval(typingInterval);
      setTimeout(function () {
        typingInterval = setInterval(() => startTyping(data), data.typeSpeed);
      }, data.pauseEnd);
    }

    data.text = current.substring(0, data.charIndex);

    if (data.direction == 'forward') {
      data.charIndex += 1;
    } else {
      if (data.charIndex == 0) {
        data.direction = 'forward';
        clearInterval(typingInterval);
        setTimeout(function () {
          data.textIndex += 1;
          if (data.textIndex >= data.textArray.length) {
            data.textIndex = 0;
          }
          typingInterval = setInterval(() => startTyping(data), data.typeSpeed);
        }, data.pauseStart);
      }
      data.charIndex -= 1;
    }
  }

  return {
    text: "",
    textArray: ["Luis Gallo", "a Software Developer", "a Gamer."],
    textIndex: 0,
    charIndex: 0,
    pauseEnd: 1500,
    cursorSpeed: 420,
    pauseStart: 20,
    typeSpeed: 110,
    direction: "forward",
    startTyping() {
      let data = this;
      typingInterval = setInterval(() => startTyping(data), data.typeSpeed);
    },
  };
}