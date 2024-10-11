// Define interface Teacher
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearOfExperience?: number;
    location: string;
    [propName: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

//Example
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe1',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'Kebede',
  fullTimeEmployee: true,
  lastName: 'idk',
  location: 'Adama',
  contract: false,
  numberOfReports: 10,
};

console.log(director1);

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

export interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
	this.firstName = firstName;
	this.lastName = lastName;
    }

    workOnHomework(): string {
	return "Currently working";
    }

    displayName(): string {
	return `${firstName}`;
    }
}

const student1: StudentClassInterface = new StudentClass("Daniel", "Tujuma");

console.log(student1.workOnHomework());
console.log(student1.displayName());
