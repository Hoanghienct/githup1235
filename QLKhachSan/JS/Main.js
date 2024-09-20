const room1 = new Room(101, 'Single', 100, 'Available');
const room2 = new Room(102, 'Double', 150, 'Booked');
const room3 = new Room(103, 'Suite', 200, 'Available');

const myHotel = new Hotel('My Hotel', [room1, room2, room3]);
// Giả sử có một thẻ HTML để hiển thị danh sách phòng trống
const availableRoomsList = document.getElementById('availableRooms');

// Hàm hiển thị danh sách phòng trống
function displayAvailableRooms() {
    const availableRooms = myHotel.getAvailableRooms();
    availableRoomsList.innerHTML = ''; // Xóa danh sách cũ

    availableRooms.forEach(room => {
        const li = document.createElement('li');
        li.textContent = `Phòng ${room.number}, Loại: ${room.type}, Giá: ${room.price}`;
        availableRoomsList.appendChild(li);
    });
}

// Hàm xử lý khi khách hàng chọn phòng và đặt phòng
function makeBooking(roomId) {
    const selectedRoom = myHotel.rooms.find(room => room.number === roomId);
    if (selectedRoom.status === 'Available') {
        // Tạo đối tượng Booking
        const booking = new Booking('John Doe', selectedRoom, '2023-11-20', '2023-11-25');
        // Lưu booking vào hệ thống (ở đây chỉ là ví dụ)
        console.log('Đặt phòng thành công:', booking);
        // Cập nhật trạng thái phòng
        selectedRoom.status = 'Booked';
        displayAvailableRooms();
    } else {
        alert('Phòng đã được đặt');
    }
}