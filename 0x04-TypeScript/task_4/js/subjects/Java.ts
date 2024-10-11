// task_4/js/subjects/Java.ts

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number; // optional attribute
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }

  // Create and export a constant java for Java Subjects
  export const java = new Java();
}
