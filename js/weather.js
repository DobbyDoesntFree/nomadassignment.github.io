const API_KEY = "fab8d3319e08fddb19e2a03998de8ef2";

function onGeoOk(position) {
  //현재 위치 가져오는 내장변수 position//
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url) //js가 브라우저에게 url 통해 사이트 호출명령//
    .then((response) => response.json()) //fetch 후 json 호출//
    .then((data) => {
      //불러온 raw 데이터 그 자체를 이하의 명령으로 수행//
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //호출한 json data(사실 여기서 data 대신 다른 변수 집어넣어도 가능) 값을 console.log로 표시//
}

function onGeoError() {
  alert("Can't chase you. No weather information available.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
