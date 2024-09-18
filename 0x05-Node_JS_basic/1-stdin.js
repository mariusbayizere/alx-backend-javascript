/**
 * Program to interact with user
 */
process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data !== null) {
    process.stdout.write(`Your name is: ${data}`);
  }
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
