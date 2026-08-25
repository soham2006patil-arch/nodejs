# Node.js File System Assignment

## Assignment Explanation

This assignment demonstrates basic file handling operations in Node.js using the built-in `fs` module.

The program performs five operations:

1. Creates a student information file using `fs.writeFile()`.
2. Reads and displays the file using `fs.readFile()`.
3. Adds additional information using `fs.appendFile()`.
4. Renames the file using `fs.rename()`.
5. Deletes the file using `fs.unlink()`.

## Technologies Used

* Node.js
* JavaScript
* File System (`fs`) module

## Student Information

The program initially creates a file containing:

```text
Name: Your Name
Course: Full Stack Development
Technology: Node.js
```

Additional information is then added:

```text
Experience: 1 Year
City: Kolkata
```

## How to Run the Program

### Step 1: Open the project

Open the assignment folder in VS Code.

### Step 2: Open the terminal

Run:

```bash
node index.js
```

### Step 3: Check the output

The program should display messages confirming:

```text
File created successfully
Student Information:
Data updated successfully
File renamed successfully
File deleted successfully
```

## File Operations

### 1. writeFile()

Creates `student.txt` and writes the student information into it.

### 2. readFile()

Reads the contents of `student.txt` and displays them in the terminal.

### 3. appendFile()

Adds the following information without removing the existing content:

```text
Experience: 1 Year
City: Kolkata
```

### 4. rename()

Changes the file name from:

```text
student.txt
```

to:

```text
studentDetails.txt
```

### 5. unlink()

Deletes `studentDetails.txt` after all other operations are completed.

## Final Project Structure

```text
project-folder/
├── index.js
├── package.json
└── README.md
```

Note: `student.txt` is created during execution, renamed to `studentDetails.txt`, and then deleted as required by the assignment.

## Expected Result

The program successfully performs all five file-system operations with error handling.

## Conclusion

This assignment demonstrates how Node.js can be used to create, read, update, rename, and delete files using the built-in `fs` module.
