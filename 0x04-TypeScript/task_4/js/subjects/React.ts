// task_4/js/subjects/React.ts

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number; // optional attribute
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }

  // Create and export a constant react for React Subjects
  export const react = new React();
}
