const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body")
};

const ColorSwitch = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.timer = setInterval(() => {
      const randomNumber = randomIntegerFromInterval(0, colors.length);
      refs.body.style.backgroundColor = colors[randomNumber];
    }, 1000);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.timer);
  }
};

refs.start.addEventListener("click", ColorSwitch.start.bind(ColorSwitch));
refs.stop.addEventListener("click", ColorSwitch.stop.bind(ColorSwitch));
