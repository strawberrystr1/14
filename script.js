'use strict';

function DomElement (selector, height, width, bg, fontSize) {

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

}

DomElement.prototype.addElem = function () {
    let newDiv = document.createElement("div");
    
    if (this.selector.charAt(0) === '.') {
        newDiv.setAttribute('class', `${this.selector.slice(1)}`); 
    } else if (this.selector.charAt(0) === '#') {
        newDiv.setAttribute('id', `${this.selector.slice(1)}`);
    }
    console.log('newDiv: ', newDiv);
    newDiv.style.cssText = `height: ${this.height}px;
    width: ${this.width}px;
    background: ${this.bg};
    font-size: ${this.fontSize}px;
    position: absolute;`;

    newDiv.innerHTML = 'Hello world!';
    document.body.append(newDiv);
};


const newDom = new DomElement('.mydiv', 100, 100, 'green', 20);

document.addEventListener('DOMContentLoaded', newDom.addElem());

document.addEventListener('keydown', function (event) {
    console.log(event);
    let press = document.getElementsByTagName('div');
    let x = press[0].offsetLeft;
    let y = press[0].offsetTop;
    if (event.code === "ArrowLeft") {
        x -= 10;
        press[0].style.left = `${x}px`;
    } else if (event.code === "ArrowRight") {
        x += 10;
        press[0].style.left = `${x}px`;
    } else if (event.code === "ArrowUp") {
        y -= 10;
        press[0].style.top = `${y}px`;
    } else if (event.code === "ArrowDown") {
        y += 10;
        press[0].style.top = `${y}px`;
    } 
});

