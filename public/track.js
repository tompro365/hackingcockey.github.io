// Add iFrame to set cookie
const localStorage = window.localStorage;

if (!localStorage.getItem('iframe')) {
  var iframe = document.createElement('iframe');
  iframe.style.display = "none";
  iframe.src = "https://codedao-tracking.glitch.me";
  document.body.appendChild(iframe);
  localStorage.setItem('iframe', 1);
}

// Wait for 2 seconds to get cookies
setTimeout(() => {
  fetch('https://codedao-tracking.glitch.me/logWrite', {
        method: 'GET',
        credentials: 'include'
  });
}, 2000);

