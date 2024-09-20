class Hotel {
    name;
    address;
    rooms;
    constructor(name,address,rooms) {
      this.name = name;
      this.address = address;
      this.rooms = rooms;
    }
      addRoom(rooms) {
        return this.rooms.push(rooms);
    }
    removeRoom(room) {

    }
    getAvailableRooms() {
        return this.rooms.filter(room => room.status === 'Available');
    }
}
class Room {
    constructor(number, type, price, status) {
        this.number = number;
        this.type = type;
        this.price = price;
        this.status = status; // Available, Booked
    }
}
class Booking {
    constructor(customerName, room, checkInDate, checkOutDate) {
        this.customerName = customerName;
        this.room = room;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
    }
}


