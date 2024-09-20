class Rectangle {
    width;
    height;
    constructor (width,height) {
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getS() {
        return this.width * this.height;
    }

    getP() {
        return (this.width + this.height) * 2;
    }

}



let myRectangle = new Rectangle(150,150);
let width = myRectangle.getWidth();
let height = myRectangle.getHeight();

document.write( "<br>"+"Chu vi :"+myRectangle.getP() + "<br>");
document.write("Dien tich :"+myRectangle.getS());
let canvas = document.getElementById("DemoCanvas");
let ctx = canvas.getContext('2d');
ctx.fillStyle='#fa4b2a';
ctx.fillRect(10, 10, width, height)