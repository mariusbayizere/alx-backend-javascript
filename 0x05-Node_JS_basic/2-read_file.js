const fs = require('fs');

function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf8');
    const studentRecords = [];
    
    fileContent.split('\n').forEach((line) => {
      studentRecords.push(line.split(','));
    });
    
    studentRecords.shift();
    const studentInfo = [];
    
    studentRecords.forEach((student) => studentInfo.push([student[0], student[3]]));
    
    const fields = new Set();
    studentInfo.forEach((student) => fields.add(student[1]));
    
    const fieldCount = {};
    fields.forEach((field) => {
      fieldCount[field] = 0;
    });
    
    studentInfo.forEach((student) => {
      fieldCount[student[1]] += 1;
    });
    
    console.log(
      `Number of students: ${
        studentRecords.filter((record) => record.length > 3).length
      }`,
    );
    
    Object.keys(fieldCount).forEach((field) => {
      console.log(
        `Number of students in ${field}: ${fieldCount[field]}. List: ${studentInfo
          .filter((student) => student[1] === field)
          .map((student) => student[0])
          .join(', ')}`,
      );
    });
  } catch (E) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
