export default function createIteratorObject(report) {
  const employees = Object.values(report);
  const allEmployees = [];

  for (const department of employees) {
    allEmployees.push(...department);
  }
  return (function* () {
    for (const employee of allEmployees) {
      yield employee;
    }
  }());
}
