<section class="resume">
  <div class="container">
    <h2>Skills</h2>
    <div class="resume-content">

      <!-- Frontend Card -->
      <div class="resume-card">
        <h3>Frontend</h3>
        <div class="skills-videos">
          <video src="assets/images/HTML.mp4" autoplay loop muted playsinline></video>
          <video src="assets/images/CSS.mp4" autoplay loop muted playsinline></video>
          <video src="assets/images/JS.mp4" autoplay loop muted playsinline></video>
          <video src="assets/images/React.webm" autoplay loop muted playsinline></video>
        </div>
      </div>

      <!-- Backend Card -->
      <div class="resume-card">
        <h3>Backend</h3>
        <div class="skills-videos">
          <video src="assets/images/Nodejs.webm" autoplay loop muted playsinline></video>
          <video src="assets/images/Php.mp4" autoplay loop muted playsinline></video>
          <video src="assets/images/Python.webm" autoplay loop muted playsinline></video>
          <video src="assets/images/c#.mp4" autoplay loop muted playsinline></video>
        </div>
      </div>

      <!-- Database Card -->
      <div class="resume-card">
        <h3>Database</h3>
        <div class="skills-videos">
          <video src="assets/images/mongoDB.mp4" autoplay loop muted playsinline></video>
          <video src="assets/images/MySQL.webm" autoplay loop muted playsinline></video>
          <video id="firebase-video" src="assets/images/firebase.webm" autoplay loop muted playsinline></video>
        </div>
      </div>

      <!-- Cloud & Tools Card -->
      <div class="resume-card">
        <h3>Cloud & Tools</h3>
        <div class="skills-videos">
          <video src="assets/images/Azure.mp4" autoplay loop muted playsinline></video>
          <video src="assets/images/Github.mp4" autoplay loop muted playsinline></video>
          <video src="assets/images/VS-Code.mp4" autoplay loop muted playsinline></video>
        </div>
      </div>

    </div>
  </div>
</section>



<script>
  // Slow down Firebase video
  const firebaseVideo = document.getElementById('firebase-video');
  firebaseVideo.playbackRate = 0.5;

  // Slow down React video
  const reactVideo = document.querySelector('video[src*="React.webm"]');
  reactVideo.playbackRate = 0.5;

  // Slow down all backend videos
  const backendVideos = document.querySelectorAll('.resume-card:nth-child(2) .skills-videos video');
  backendVideos.forEach(video => video.playbackRate = 0.5);
</script>
