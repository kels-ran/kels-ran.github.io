// image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/chrome-logo.png') {
      myImage.setAttribute('src','images/bw-chrome-logo.png');
    } else {
      myImage.setAttribute('src','images/chrome-logo.png');
    }
}


// personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Hi! What should we call you?');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Thank you for visiting, ' + myName + '!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Thank you for visiting, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}