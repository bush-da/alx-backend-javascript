/**
 * Retrieves the sum of ids of a list of students.
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, nextStudent) => prevStudent.id || prevStudent + nextStudent.id,
      0,
    );
  }
  return 0;
}











