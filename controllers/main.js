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

// Handle add new student
function handleAddStudent() {
  document.getElementById("addStudent").addEventListener("click", function () {
    alert("say hi");
  });
}

handleAddStudent();
