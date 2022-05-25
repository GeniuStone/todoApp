const API_KEY = "40ec5f47dc8ad3403532ce47d40ffe68";

const weatherIcon = {
  "01": {
    "a" : "fas",
    "b" : "fa-sun"
  },
  "02": {
    "a" : "fas",
    "b" : "fa-cloud-sun"
  },
  "03": {
    "a" : "fas",
    "b" : "fa-cloud"
  },
  "04": {
    "a" : "fas",
    "b" : "fa-cloud-meatball"
  },
  "09": {
    "a" : "fas",
    "b" : "fa-cloud-sun-rain"
  },
  "10": {
    "a" : "fas",
    "b" : "fa-cloud-showers-heavy"
  },
  "11": {
    "a" : "fas",
    "b" : "fa-poo-storm"
  },
  "13": {
    "a" : "fas",
    "b" : "fa-snowflake"
  },
  "50": {
    "a" : "fas",
    "b" : "fa-smog"
  },
};

const onSuccess = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // fetch -> url을 통해 자바스크립트가 해당 api에 데이터를 요청, fetch는 promise를 반환
  // 서버에 api를 요청한 뒤 수행할 동작을 then 메서드에 작성
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const citySpan = document.querySelector("div#weather > span:nth-child(2)");
      const iconSpan = document.querySelector("div#weather > span:nth-child(3)");
      const tempSpan = document.querySelector(
        "div#weather > span:nth-child(4)"
      );
      const icon = document.createElement("i");
      const iconNum = (data.weather[0].icon).substr(0, 2);
      icon.classList.add(`${weatherIcon[iconNum].a}`, `${weatherIcon[iconNum].b}`);
    
      citySpan.innerText = `${data.sys.country}_${data.name}`;
      iconSpan.append(icon);      
      tempSpan.innerText = `${data.main.temp}°C`;
    });
};

const onFailure = () => {
  alert("Cannot find your location..");
};

navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
