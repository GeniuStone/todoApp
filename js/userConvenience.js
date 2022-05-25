const logoutBtn = document.querySelector("div#weather > span.logoutBtn");
const playPauseBtn = document.querySelector("div#weather > span.playPauseBtn > i");
let isPlay = false;

const onLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("todoArray");
    location.reload();
}

const onToggleMusic = () => {
    if (isPlay) {            
        playPauseBtn.classList.replace('fa-pause', 'fa-play');            
        audio.pause();
        isPlay = false;        
    } else {        
        playPauseBtn.classList.replace('fa-play', 'fa-pause');
        audio.play();
        isPlay = true;        
    }
}

logoutBtn.addEventListener("click", onLogout);
logoutBtn.addEventListener("mouseover", () => {
    logoutBtn.innerText = "Escape";    
});
logoutBtn.addEventListener("mouseout", () => {
    logoutBtn.innerText = "Logout";    
});
playPauseBtn.addEventListener("click", onToggleMusic);