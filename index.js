function GetAllStudents()
{

    fetch('https://ibrahim-test-012.onrender.com')
      .then(response => response.json())
      .then(json => {
        let students = document.getElementById('students');
        json.forEach(s => {
            let student = document.createElement('tr');
            student.innerHTML = `
            <th class="cell">${s.id}</th>
            <th class="cell">${s.name}</th>
            <th class="cell">${s.phone}</th>
            <th class="cell">${s.age}</th>
            <th class="cell">${s.school}</th>
            <th class="cell">${s.hobbies}</th>`;

            students.appendChild(student);
        });
      })
}