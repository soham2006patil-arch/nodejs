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
<img width="573" height="243" alt="Screenshot 2026-08-25 at 10 22 43 PM" src="https://github.com/user-attachments/assets/2fa22b6a-7e87-4457-87df-73e776ed06e9" />

<img width="569" height="245" alt="Screenshot 2026-08-25 at 10 25 08 PM" src="https://github.com/user-attachments/assets/bd583172-699e-42ff-963a-7a5176389dba" />

<img width="572" height="192" alt="Screenshot 2026-08-25 at 10 25 30 PM" src="https://github.com/user-attachments/assets/59c1773f-64c9-4ca6-867c-a7aec4b2e4e7" />

<img width="518" height="157" alt="Screenshot 2026-08-25 at 10 25 45 PM" src="https://github.com/user-attachments/assets/23945a2b-0432-4ecb-897c-73030c7e8db9" />

<img width="521" height="163" alt="Screenshot 2026-08-25 at 10 25 58 PM" src="https://github.com/user-attachments/assets/421317bf-b2b4-4735-883c-7706b5a1dc36" />

## Conclusion

This assignment demonstrates how Node.js can be used to create, read, update, rename, and delete files using the built-in `fs` module.
