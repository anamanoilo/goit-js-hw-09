function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('[data-start'),
  stopBtn: document.querySelector('[data-stop'),
};

let timerId = null;

refs.startBtn.addEventListener('click', startBodyColorizer);
refs.stopBtn.addEventListener('click', stopBodyColorizer);

function startBodyColorizer() {
  document.body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  makeBtnDisabled(refs.startBtn, refs.stopBtn);
}
function stopBodyColorizer() {
  clearInterval(timerId);
  makeBtnDisabled(refs.stopBtn, refs.startBtn);
}
function makeBtnDisabled(btnToMakeDisabled, btnToMakeActive) {
  btnToMakeActive.removeAttribute('disabled');
  btnToMakeDisabled.setAttribute('disabled', true);
}
