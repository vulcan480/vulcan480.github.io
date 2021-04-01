myButton = document.querySelector('button')
myImage = document.querySelector('img')
myHeading = document.querySelector('h1')

myButton.onclick = function() {
    myImage.setAttribute('src', 'image/new_family.png')
    myHeading.textContent = 'Our Family Now'
}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/mom_and_dad.png') {
      myImage.setAttribute('src', 'image/new_family.png');
      myHeading.textContent = 'Our Family Now';
    } else {
      myImage.setAttribute('src', 'image/mom_and_dad.png');
      myHeading.textContent = 'Mom and Dad 20 Years ago';
    }
}

