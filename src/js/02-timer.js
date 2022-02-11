import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    refs.startBtn.disabled = false;
  },
};

flatpickr('input#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start'),
  daysSpan: document.querySelector('[data-days]'),
  hoursSpan: document.querySelector('[data-hours]'),
  minutesSpan: document.querySelector('[data-minutes]'),
  secondsSpan: document.querySelector('[data-seconds]'),
};

function startTimer() {
  refs.startBtn.disabled = true;
  setInterval(() => {
    const currentTime = Date.now();
    const targetDate = new Date(refs.input.value);
    const delta = targetDate - currentTime;
    const remaining = convertMs(delta);
    const addLeadingZero = value => String(value).padStart(2, 0);
    refs.daysSpan.textContent = addLeadingZero(remaining.days);
    refs.hoursSpan.textContent = addLeadingZero(remaining.hours);
    refs.minutesSpan.textContent = addLeadingZero(remaining.minutes);
    refs.secondsSpan.textContent = addLeadingZero(remaining.seconds);
  }, 1000);
}
refs.startBtn.disabled = true;

refs.startBtn.addEventListener('click', startTimer);
