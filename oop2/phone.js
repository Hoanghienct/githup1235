class Mobile {
    // khai bao thuoc tinh
    pin;
    message;
    inbox;
    outbox;
    status;

    constructor() {
        this.pin = 100;
        this.message = "";
        this.inbox = [];
        this.outbox = [];
        this.status = false;
    }

    checkStatus() {
        this.pin -= 1;
        if (this.status) {
            return "Dien thoai dang bat";
        }
        return "Dien thoai dang tat";
    }

    turnOn() {
        this.pin -= 1;
        this.status = true;
    }

    turnOff() {
        this.pin -= 1;
        this.status = false;
    }

    chargePin(){
        this.pin += 1;
    }

    writeMessage(txt) {
        this.pin -= 1;
        this.message += txt;
    }

    sendMessage(phone) {
        this.pin -= 1;
        phone.inbox.push(this.message);
        this.outbox.push(this.message);
    }
    inBox(){
        this.pin -= 1;
        console.log(this.inbox);
    }
    viewMessage(){
        this.pin -= 1;
        console.log(this.outbox);
    }
}