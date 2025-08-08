const API_URL = "http://localhost:8080/api/students";
const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

const fetchStudents = async () => {
  const res = await fetch(API_URL);
  const students = await res.json();
  studentList.innerHTML = "";
  students.forEach((student) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${student.name} (${student.email})
      <button onclick="deleteStudent(${student.id})">❌</button>
    `;
    studentList.appendChild(li);
  });
};

studentForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });

  studentForm.reset();
  fetchStudents();
});

const deleteStudent = async (id) => {
  await fetch(${API_URL}/${id}, { method: "DELETE" });
  fetchStudents();
};

fetchStudents();
