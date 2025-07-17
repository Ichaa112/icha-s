// JavaScript Document

const games = [ 
  {
    name: 'VALORANT',
    className: 'valorant',
    img: 'IMG/valorant.png',
    link: 'valorant.html'
  },
  {
    name: 'MARVEL RIVAL',
    className: 'marvel',
    img: 'IMG/marvy rivy.png',
    link: 'marvel.html'
  },
  {
    name: 'OVERWATCH',
    className: 'overwatch',
    img: 'IMG/ow2.png',
    link: 'overwatch.html'
  },
  {
    name: 'CITY SKYLINE',
    className: 'city',
    img: 'IMG/city skyline.png',
    link: 'city.html'
  }
];

let current = 0;

function updateSliderContent() {
  const track = document.getElementById('slider-track');
  const container = document.getElementById('my-games');
  const title = document.getElementById('game-title');
  const readMoreBtn = document.getElementById('read-more');

  // Apply theme color
  container.className = games[current].className;

  // Update title
  title.textContent = games[current].name;

  // Update "Read More" button link
  if (games[current].link) {
    readMoreBtn.style.display = 'inline-block';
    readMoreBtn.onclick = () => {
      window.location.href = games[current].link;
    };
  } else {
    readMoreBtn.style.display = 'none'; // hide if no link
  }

  // Clear existing images
  track.innerHTML = '';

  // Calculate indices
  const prev = (current - 1 + games.length) % games.length;
  const next = (current + 1) % games.length;

  // Create previous image
  const imgPrev = document.createElement('img');
  imgPrev.src = games[prev].img;
  imgPrev.alt = games[prev].name;
  imgPrev.style.width = '300px';
  imgPrev.style.opacity = '0.7';
  imgPrev.style.transition = 'all 0.3s ease';

  // Create center image
  const imgCurrent = document.createElement('img');
  imgCurrent.src = games[current].img;
  imgCurrent.alt = games[current].name;
  imgCurrent.style.width = '500px';
  imgCurrent.style.zIndex = '2';
  imgCurrent.style.transition = 'all 0.3s ease';

  // Create next image
  const imgNext = document.createElement('img');
  imgNext.src = games[next].img;
  imgNext.alt = games[next].name;
  imgNext.style.width = '300px';
  imgNext.style.opacity = '0.7';
  imgNext.style.transition = 'all 0.3s ease';

  // Append to track
  track.appendChild(imgPrev);
  track.appendChild(imgCurrent);
  track.appendChild(imgNext);

  // Move track to center position (left offset = 300px)
  track.style.transition = 'none';
  track.style.transform = 'translateX(-300px)';

  // Re-enable transition
  setTimeout(() => {
    track.style.transition = 'transform 0.5s ease-in-out';
  }, 10);
}

function nextSlide() {
  const track = document.getElementById('slider-track');
  track.style.transform = 'translateX(-800px)'; // 300 (prev) + 500 (current)

  setTimeout(() => {
    current = (current + 1) % games.length;
    updateSliderContent();
  }, 500);
}

function prevSlide() {
  const track = document.getElementById('slider-track');
  track.style.transform = 'translateX(0px)'; // move to previous image

  setTimeout(() => {
    current = (current - 1 + games.length) % games.length;
    updateSliderContent();
  }, 500);
}

window.onload = updateSliderContent;


