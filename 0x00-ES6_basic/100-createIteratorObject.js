export default function* createIteratorObject(report) {
  for (const department of Object.values(report.allEmployees)) {
    for (const employee of department) {
      yield employee;
    }
  }
}
