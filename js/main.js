document.getElementById('current-year').textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("heroVideo");
  const videoSource = document.getElementById("heroVideoSource");
  const loadingCircle = document.getElementById("loadingCircle");

  if (video && videoSource && loadingCircle) {
    // 1. Set the source and poster
    // video.poster = "img/terra.png";
    videoSource.src = "https://github.com/khaled-hassan1/terra_feed/releases/download/intro/terra.mp4";
    video.load();

    // 2. Add event listener to hide loading circle and show video when ready
    video.addEventListener('canplaythrough', () => {
      loadingCircle.classList.add('hidden');
      video.classList.add('video-visible');
      video.play().catch(error => {
        console.log("Autoplay issue:", error);
      });
    }, { once: true });

    // 3. Autoplay logic for visibility changes
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") {
        video.play().catch(error => console.log("Autoplay issue:", error));
      }
    });

    // 4. Autoplay logic for unexpected pauses
    video.addEventListener("pause", function () {
      if (document.visibilityState === "visible") {
        video.play().catch(error => console.log("Autoplay issue:", error));
      }
    });
  } else {
    console.error("Hero video, video source, or loading circle element not found!");
  }
});