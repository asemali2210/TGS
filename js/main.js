const headerVideo = document.getElementById('headerVideo');
const playBtn = document.getElementById('playBtn');
const navOpen = document.getElementById('navOpen');
const navClose = document.getElementById('navClose');
const navMenu = document.getElementById('navMenu');
const videoContainer = document.querySelector('.video-container');

/* play video >> header button  */
playBtn.addEventListener('click', ()=>{ 
    headerVideo.play();
    videoContainer.classList.add('on-video-playing');
    headerVideo.setAttribute('controls', "true")

})
/* show header content after video finish  */
headerVideo.addEventListener('ended', ()=>{
    videoContainer.classList.remove('on-video-playing');
    headerVideo.removeAttribute('controls')
})
/* nav open */
navOpen.addEventListener('click', ()=> {
    navMenu.style.display = "block";
    navMenu.classList.add("animate__fadeInLeft");
})
/* nav close */
navClose.addEventListener('click', ()=> {
    navMenu.classList.add("animate__fadeOutRight")
    setTimeout(() => {
        navMenu.style.display = "none";
        navMenu.classList.remove("animate__fadeOutRight")
    },1000);
})
