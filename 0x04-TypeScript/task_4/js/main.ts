// task_4/js/main.ts

/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import { cpp } from './subjects/Cpp';
import { java } from './subjects/Java';
import { react } from './subjects/React';
import { Teacher } from './subjects/Teacher'; // Import Teacher interface

// Create a Teacher object cTeacher
const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10
};

// Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
