// Lấy tham chiếu đến form và bảng
const studentForm = document.getElementById('studentForm');
const studentTableBody = document.querySelector('#studentTable tbody');

// Khởi tạo danh sách sinh viên (lấy từ LocalStorage nếu có)
let students = JSON.parse(localStorage.getItem('students')) || [];

// Hàm hiển thị danh sách sinh viên
function displayStudents() {
    studentTableBody.innerHTML = ''; // Xóa danh sách cũ
    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.class}</td>
            <td><button onclick="deleteStudent(${index})">Xóa</button></td>
        `;
        studentTableBody.appendChild(row);
    });
}

// Hàm thêm sinh viên mới
function addStudent(event) {
    event.preventDefault(); // Ngăn trang web load lại khi submit

    // Lấy dữ liệu từ form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const className = document.getElementById('class').value;

    // Thêm sinh viên mới vào danh sách
    students.push({ name, age, class: className });

    // Cập nhật LocalStorage
    localStorage.setItem('students', JSON.stringify(students));

    // Hiển thị lại danh sách sinh viên
    displayStudents();

    // Reset form
    studentForm.reset();
}

// Hàm xóa sinh viên
function deleteStudent(index) {
    students.splice(index, 1); // Xóa sinh viên theo chỉ số
    localStorage.setItem('students', JSON.stringify(students)); // Cập nhật LocalStorage
    displayStudents(); // Hiển thị lại danh sách
}

// Thêm sự kiện submit cho form
studentForm.addEventListener('submit', addStudent);

// Hiển thị danh sách sinh viên khi tải trang
displayStudents();


