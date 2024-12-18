// task_4/js/subjects/Cpp.ts

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number; // optional attribute
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }

  // Create and export a constant cpp for Cpp Subjects
  export const cpp = new Cpp();
}
