var student = new Student();

// Get element by id
function getEleById(ele) {
  return document.getElementById(ele);
}

// Get element by selector
function getEleBySelector(ele) {
  return document.querySelector(ele);
}

// Get element by selector all
function getEleBySelectorAll(ele) {
  return document.querySelectorAll(ele);
}

// Render student table
function renderTableStudent(arrStudent) {
  var rowTable = "";

  for (var i = 0; i < arrStudent.length; i++) {
    var sd = arrStudent[i];
    var student = new Student(
      sd.maSinhVien,
      sd.tenSinhVien,
      sd.email,
      sd.soDienThoai,
      sd.loaiSinhVien,
      sd.diemToan,
      sd.diemLy,
      sd.diemHoa,
      sd.diemRenLuyen
    );

    rowTable += `
      <tr>
        <td>${student.maSinhVien}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.soDienThoai}</td>
        <td>${student.loaiSinhVien}</td>
        <td>${student.diemToan}</td>
        <td>${student.diemLy}</td>
        <td>${student.diemHoa}</td>
        <td>${student.diemRenLuyen}</td>
        <td></td>
        <td></td>
        <td>
          <button type="button" class="btn btn-danger">Xoá</button>
          <button type="button" class="btn btn-primary">Sửa</button>
        </td>
      </tr>
    `;
  }

  document.querySelector("#tableBody").innerHTML = rowTable;

  console.log(getElementById("tableBody"));
}

//-------------------------------Get Student List----------------------------------
function getStudentList() {
  var promise = axios({
    url: "http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
    method: "get",
  });

  promise.then(function (result) {
    renderTableStudent(result.data);
  });

  promise.catch(function (error) {
    console.log("error", error.response.data);
  });
}

//Gọi hàm lấy dữ liệu từ backend về
getStudentList();

//-------------------------------Add Student List----------------------------------
function handleAddStudent() {
  document.getElementById("addStudent").addEventListener("click", function () {
    alert("say hi");
  });
}

handleAddStudent();
