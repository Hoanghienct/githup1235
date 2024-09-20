const m1 = new Mobile();

m1.turnOn();

document.write(m1.checkStatus())

m1.turnOff();
document.write("<br>")

document.write(m1.checkStatus())
document.write("<br>")
document.write(m1.pin)
m1.chargePin();
document.write("<br>")
document.write(m1.pin)

m1.writeMessage("Tin nhat gui di");

const m2 = new Mobile();

m2.turnOn();
m1.sendMessage(m2);
m2.inBox();
m1.viewMessage();
m1.chargePin();
document.write('<br>'+m2.pin);