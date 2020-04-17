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
    font-size: ${this.fontSize}px;`;

    newDiv.innerHTML = 'Hello world!';
    document.body.append(newDiv);
};

const newDom = new DomElement('.mydiv', 500, 400, 'red', 50);
newDom.addElem();

