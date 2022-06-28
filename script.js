// Navbar
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click',()=>{
    navbar.classList.toggle('change');
    menu.classList.toggle('change');
});
// End of Navbar

// Section 2 Video 
const video = document.querySelector('.video');
const btn = document.querySelector('.buttons i');
const bar = document.querySelector('.video-bar');


const playPause = () =>{
    if(video.paused){
        video.play()
        btn.className = 'far fa-pause-circle';
        video.style.opacity = '.7'
    } else {
        video.pause()
        btn.className = 'far fa-play-circle';
        video.style.opacity = '.3'
    } 
}


btn.addEventListener('click',()=>{
    playPause()
})

video.addEventListener('timeupdate',()=>{     
    let barWidth = (video.currentTime/video.duration) * 100;
    bar.style.width = `${barWidth}%`;
    if(video.ended){
        btn.className = 'far fa-play-circle';
        video.style.opacity = '.3'
    }
})
// End of Section 2 Video


// Section 3 Pricing Card
var swiper = new Swiper('.swiper-container', {

    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows : true
    },
    // loop: true
  });
// End of Section 3 Pricing Card