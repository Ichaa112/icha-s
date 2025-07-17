// JavaScript Document
function zoomIntoScreen() {
  const container = document.getElementById('zoomContainer');
  container.classList.add('zoomed');

  // After zoom, go to next page
  setTimeout(() => {
    window.location.href = "screen.html"; // your new screen page
  }, 1000);
}
