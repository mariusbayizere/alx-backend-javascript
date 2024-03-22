
# TypeScript Project

This project consists of multiple tasks aimed at implementing various TypeScript features. Each task involves creating and working with interfaces, classes, functions, and advanced types. The tasks are structured to progressively build on each other, enhancing TypeScript skills and knowledge.

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- All files will be transpiled on Ubuntu 18.04
- TypeScript scripts will be checked with `jest` (version 24.9.*)
- A `README.md` file, at the root of the folder of the project, is mandatory
- Code should use the `.ts` extension when possible
- The TypeScript compiler should not show any warnings or errors when compiling the code

## Configuration Files
Please use the provided configuration files for the tasks:

- `package.json`
- `.eslintrc.js`
- `tsconfig.json`
- `webpack.config.js`

## Tasks

### Task 0: Creating an Interface for a Student
- **Directory**: `task_0`
- **Files**: `task_0/js/main.ts`, `task_0/package.json`, `task_0/.eslintrc.js`, `task_0/tsconfig.json`, `task_0/webpack.config.js`

Create an interface named `Student` with the following elements:
- `firstName` (string)
- `lastName` (string)
- `age` (number)
- `location` (string)

Create two students and an array named `studentsList` containing these students. Render a table using Vanilla JavaScript, where each row contains the first name and location of each student.

### Task 1: Let's Build a Teacher Interface
- **Directory**: `task_1`
- **Files**: `task_1/js/main.ts`, `task_1/package.json`, `task_1/tsconfig.json`, `task_1/webpack.config.js`

Create an interface named `Teacher` with the following attributes:
- `firstName` (string)
- `lastName` (string)
- `fullTimeEmployee` (boolean)
- `yearsOfExperience` (number, optional)
- `location` (string)
- Add the possibility to add any attribute to the object like `contract` (boolean)

### Task 2: Extending the Teacher Interface
- **Directory**: `task_1`
- **File**: `task_1/js/main.ts`

Create an interface named `Directors` that extends `Teacher` and adds a `numberOfReports` attribute (number).

### Task 3: Printing Teachers
- **Directory**: `task_1`
- **File**: `task_1/js/main.ts`

Write a function `printTeacher` that accepts two arguments (`firstName` and `lastName`) and returns the first letter of the `firstName` and the full `lastName`.

### Task 4: Writing a Class
- **Directory**: `task_1`
- **File**: `task_1/js/main.ts`

Write a class named `StudentClass` with a constructor accepting `firstName` and `lastName`. It should have methods `workOnHomework` (returning "Currently working") and `displayName` (returning the `firstName`).

### Task 5: Advanced Types Part 1
- **Directory**: `task_2`
- **Files**: `task_2/js/main.ts`, `task_2/package.json`, `task_2/tsconfig.json`, `task_2/webpack.config.js`

Create interfaces `DirectorInterface` and `TeacherInterface` with methods:
- `workFromHome()`
- `getCoffeeBreak()`
- `workDirectorTasks()` / `workTeacherTasks()`

Create classes `Director` and `Teacher` implementing these interfaces. Write a function `createEmployee` that returns a `Director` or `Teacher` based on the salary.

### Task 6: Creating Functions Specific to Employees
- **Directory**: `task_2`
- **File**: `task_2/js/main.ts`

Write functions `isDirector` and `executeWork`. The former checks if an employee is a director, and the latter calls `workDirectorTasks` or `workTeacherTasks` based on the employee's role.

### Task 7: String Literal Types
- **Directory**: `task_2`
- **File**: `task_2/js/main.ts`

Write a string literal type `Subjects` allowing values `Math` or `History`. Write a function `teachClass` that returns "Teaching Math" or "Teaching History" based on the input.

### Task 8: Ambient Namespaces
- **Directory**: `task_3`
- **Files**: `task_3/js/main.ts`, `task_3/js/interface.ts`, `task_3/js/crud.d.ts`, `task_3/package.json`, `task_3/tsconfig.json`, `task_3/webpack.config.js`

Create types and interfaces in `interface.ts`, and an ambient file `crud.d.ts` for a library `crud.js`. Import and use these in `main.ts`.

### Task 9: Namespace & Declaration Merging
- **Directory**: `task_4`
- **Files**: `task_4/js/main.ts`, `task_4/package.json`, `task_4/tsconfig.json`

Explore namespaces and declaration merging in TypeScript.

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/<your-github-username>/alx-backend-javascript.git
