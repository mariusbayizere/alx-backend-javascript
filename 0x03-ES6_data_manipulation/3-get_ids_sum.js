export default function getStudentIdsSum(studentList) {
  if (Array.isArray(studentList)) {
    return studentList.reduce(
      (number, student) => number + student.id,
      0,
    );
  }
  return [];
}
