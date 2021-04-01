let myheading = document.querySelector('h1');
let mybutton = document.querySelector('button');

function setUserName() {
    let myname = prompt('请输入你的名字: ');
    if(!myname || myname === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myname)
    myheading.textContent = 'Mom and Dad   ' + myname;
    }  

}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myheading.textContent = 'Mom and Dad   ' + storedName;
}
mybutton.onclick = function() {
    setUserName();
}


let myimage = document.querySelector('img');
myimage.onclick = function () {
    let mysrc = myimage.getAttribute('src');
    if(mysrc === 'image/mom_and_dad.jpg'){
        myimage.setAttribute('src', 'image/family.jpg');
    } else {
        myimage.setAttribute('src', 'image/mom_and_dad.jpg');
    }
}


