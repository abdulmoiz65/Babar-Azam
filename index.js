
const video = document.getElementById('video-background');
    const videoImage = document.getElementById('video-image');
    const textSection = document.getElementById('text-section');

    video.addEventListener('ended', function() {
        video.style.display = 'none';
        videoImage.style.display = 'block';
    });

    window.addEventListener('scroll', function() {
        const rect = video.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.bottom <= windowHeight) {
            video.style.display = 'none';
            videoImage.style.display = 'block';
        }
    });

    // added code 

    let videoEnded = false;

video.addEventListener('ended', () => {
    video.style.display = 'none';
    videoImage.style.display = 'block';
    videoEnded = true;
});

window.addEventListener('scroll', () => {
    if (!videoEnded) { // Check if video has already ended
        const rect = video.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.bottom <= windowHeight) {
            video.style.display = 'none';
            videoImage.style.display = 'block';
        }
    }
});

setTimeout(() => { // Timeout in case video doesn't trigger the 'ended' event
    if (!videoEnded) {
        video.style.display = 'none';
        videoImage.style.display = 'block';
    }
}, 20000); 

