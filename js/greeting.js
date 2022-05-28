const loginForm = document.querySelector("form#loginForm");
const loginInput = document.querySelector("input.loginInput");
const greeting = document.querySelector("h1#greeting");
const container = document.querySelector("#container");

// 요건 그냥 일반적인 관습, 순수 문자열만 담는 변수는 보통 이렇게 이름 설정함
// 본인이 생성한 문자열을 반복적으로 사용할 예정이라면 오타로 인한 오류를 찾기 쉽도록 변수에 저장해서 고정시켜주자
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "5.jpg", "6.jpg"];
const audios = ["1.mp3", "2.mp3", "3.mp3", "4.mp3"];

const randNum = (num) => {
  return Math.floor(Math.random() * num);
};

const audio = new Audio("../audio/" + audios[randNum(audios.length)]);

console.info(audio);

const alteration = () => {      
  document.querySelector("form#todoForm").classList.remove(HIDDEN_CLASSNAME);
  document.querySelector("ul#todoList").classList.remove(HIDDEN_CLASSNAME);
  container.style.backgroundImage =
    "url(" + `../images/${images[randNum(images.length)]}` + ")";
  document.querySelector("div#clockBox > span").style.fontWeight = "100";
  document.querySelector("div#clockBox > h2").style.fontWeight = "100";  
  document.querySelector("div#clockBox > h2").classList.add("shadow");
  document.querySelector("div#weather > span.logoutBtn").classList.remove(HIDDEN_CLASSNAME);
  document.querySelector("div#weather > span.playPauseBtn > i").classList.remove(HIDDEN_CLASSNAME);
};

const onSubmit = (e) => {
  e.preventDefault();

  day.innerText = "66:66:66";
  day.style.color = "red";
  clock.innerText = "66:66:66";  
  clock.style.color = "red";
 
  loginForm.classList.add(HIDDEN_CLASSNAME);
  alteration();

  const username = loginInput.value;
  addGreetingText(username);
  localStorage.setItem(USERNAME_KEY, username);
  
  playPauseBtn.classList.replace('fa-play', 'fa-pause');
  isPlay = true;

  audio.play();
  audio.loop = true;
};

const addGreetingText = (username) => {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${username}`;
};

const localUsername = localStorage.getItem(USERNAME_KEY);

if (localUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmit);
} else {
  addGreetingText(localUsername);
  alteration();
}
