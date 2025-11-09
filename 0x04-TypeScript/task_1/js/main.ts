interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const Student_1: Student = {
  firstName: "Mark",
  lastName: "luther",
  age: 25,
  location: "Egypt",
};

const Student_2: Student = {
  firstName: "Sam",
  lastName: "King",
  age: 29,
  location: "UEA",
};

// task_1/js/main.ts

export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional properties like "contract"
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

const studentsList: Student[] = [Student_1, Student_2];

const table = document.createElement("table");
const header = table.insertRow();
header.innerHTML = "<th>First Name</th>  <th>Last Name</th>  <th>Location</th>";

studentsList.forEach((student) => {
  const row = table.insertRow();
  row.innerHTML = `<td>${student.firstName}</td><td>${student.lastName}</td><td>${student.location}</td>`;
});

document.body.appendChild(table);
console.log("TypeScript is very working!");
