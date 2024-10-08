/**
 * Retrieves the sum of ids of a list of students.
 */
export default function getStudentIdsSum(students) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
