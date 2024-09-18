const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} path The path to the CSV data file.
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  try {
    const fileContent = fs.readFileSync(path, 'utf8');
    const studentRecords = [];

    fileContent.split('\n').forEach((line) => {
      if (line.trim() !== '') {
        studentRecords.push(line.split(','));
      }
    });

    studentRecords.shift();  // Remove header

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

    let report = `Number of students: ${studentRecords.length}`;
    Object.keys(fieldCount).forEach((field) => {
      report += `\nNumber of students in ${field}: ${fieldCount[field]}. List: ${studentInfo
        .filter((student) => student[1] === field)
        .map((student) => student[0])
        .join(', ')}`;
    });

    resolve(report);
  } catch (err) {
    reject(new Error('Cannot load the database'));
  }
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      responseParts.push(err.message);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 500;
      res.write(Buffer.from(responseText));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
