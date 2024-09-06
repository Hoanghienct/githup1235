
function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperation(operation) {
    document.getElementById('display').value += ' ' + operation + ' ';
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let display = document.getElementById('display').value;
    try {
        let result = eval(display);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function moveButton() {
    // Lấy chiều cao và chiều rộng của cửa sổ trình duyệt
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // Sinh ra vị trí ngẫu nhiên cho nút
    const randomTop = Math.random() * (windowHeight - 50); // Trừ đi chiều cao của nút để tránh vượt quá giới hạn
    const randomLeft = Math.random() * (windowWidth - 100); // Trừ đi chiều rộng của nút để tránh vượt quá giới hạn

    // Lấy nút bằng ID và thay đổi vị trí của nó
    const noButton = document.getElementById('noButton');
    noButton.style.top = randomTop + 'px';
    noButton.style.left = randomLeft + 'px';}
