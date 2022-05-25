const day = document.querySelector("div#clockBox > span");
const clock = document.querySelector("div#clockBox > h2");

const getClock = () => {
    const date = new Date();    
    
    // padstart 함수는 문자열에만 사용할 수 있는 함수임~
    // 해당 문자열의 길이를 2로 지정하되 길이가 2가 안되면 안되는 공간을 0으로 채우기
    const years = String(date.getFullYear()).padStart(2, "0");
    const months = String(date.getMonth()+1).padStart(2, "0");
    const days = String(date.getDate()).padStart(2, "0");

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    day.innerText = `${years}.${months}.${days}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;

    document.querySelector("div#clockBox > h2").style.color = "white";
    document.querySelector("div#clockBox > span").style.color = "white";
}

getClock();
setInterval(getClock, 1000);