const http = require('http');
const fs = require('fs');
const { argv } = require('process');

function countStudents(path, stream) {
  if (fs.existsSync(path)) {
    const fileContent = fs.readFileSync(path, 'utf8');
    const studentRecords = [];

    fileContent.split('\n').forEach((line) => {
      if (line.trim() !== '') {
        // Check if the line is not empty
        studentRecords.push(line.split(','));
      }
    });
    studentRecords.shift();  // Remove the header row

    const studentInfo = [];
    studentRecords.forEach((record) => studentInfo.push([record[0], record[3]]));

    const fields = new Set();
    studentInfo.forEach((item) => fields.add(item[1]));

    const fieldCount = {};
    fields.forEach((field) => {
      fieldCount[field] = 0;
    });

    studentInfo.forEach((student) => {
      fieldCount[student[1]] += 1;
    });

    stream.write(`Number of students: ${studentRecords.length}\n`);

    const output = [];
    Object.keys(fieldCount).forEach((field) => {
      output.push(
        `Number of students in ${field}: ${fieldCount[field]}. List: ${studentInfo
          .filter((student) => student[1] === field)
          .map((student) => student[0])
          .join(', ')}\n`,
      );
    });

    for (let i = 0; i < output.length; i++) {
      if (i === output.length - 1) {
        output[i] = output[i].replace(/(\r\n|\n|\r)/gm, '');
      }
      stream.write(output[i]);
    }

    stream.end(); // End the response stream here
  } else {
    throw new Error('Cannot load the database');
  }
}

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      countStudents(argv[2], res);
    } catch (err) {
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

app.listen(port, hostname);

module.exports = app;
