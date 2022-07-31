const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");
body.style.backgroundImage = `url(img/${chosenImage})`;

//prepend 사용하면 box 맨 위에 붙음. append는 마지막//
//str 생성 - 박스 생성 - 갖다 붙이기(경로 잘 만들어서) //
