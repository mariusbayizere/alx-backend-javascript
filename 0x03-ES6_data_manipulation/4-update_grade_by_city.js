// 4-update_grade_by_city.js
export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter(student => student.location === city)
    .map(student => {
      const grade = newGrades.find(g => g.studentId === student.id);
      return {
        ...student,
        grade: grade ? grade.grade : 'N/A',
      };
    });
}
