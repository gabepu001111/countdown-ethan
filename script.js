const targetDate = new Date('January 1, 2026 00:00:00').getTime();
const countdown = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance > 0) {
    countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    countdown.textContent = "Ethan can now do 10 pull-ups! 🎉";
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
