// Define interface Student
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Abebe',
  lastName: 'Beso',
  age: 20,
  location: 'Addis Abeba',
};

const student2: Student = {
  firstName: 'Challa',
  lastName: 'Chube',
  age: 22,
  location: 'Dire Dawa',
};

// Array containing the two students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;

    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
});
