export default function getListStudentIds(studentList) {
  if (Array.isArray(studentList)) {
    return studentList.map((student) => student.id);
  }
  return [];
}
