// Navbar berubah warna saat scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = '#141414';
  } else {
    header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))';
  }
});

// Tombol play
const btnPlay = document.getElementById('btnPlay');
btnPlay.addEventListener('click', () => {
  alert('Mulai melihat portfolio!');
});

document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("card1");
  const video = document.getElementById("video1");

  card.addEventListener("click", () => {
    // aktifkan suara
    video.muted = false;
    video.volume = 1;

    // play video
    video.play().then(() => {
      // fullscreen
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }).catch(err => {
      console.log("Gagal play:", err);
      alert("Video tidak bisa diputar. Cek file video!");
    });
  });

  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      video.pause();
      video.currentTime = 0;
    }
  });
});

function openProject(project) {
  const overlay = document.createElement("div");
  overlay.innerHTML = `
    <div style="
      position:fixed;
      inset:0;
      background:rgba(0,0,0,0.9);
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:9999;"
      onclick="this.remove()">
      
      <img src="${project}" 
           style="max-width:90%; max-height:90%; border-radius:10px;">
    </div>
  `;
  document.body.appendChild(overlay);
}

