# Promise-Based Recruitment Evaluation System

## 📌 Assignment Overview

This project is a **Promise-Based Recruitment Evaluation System** built using JavaScript. It simulates a recruitment process with multiple evaluation stages.

The candidate must successfully clear:

1. Coding Assessment
2. Technical Interview
3. Final Selection Review

The program uses **JavaScript Promises**, `.then()`, and `.catch()` to handle asynchronous operations.

---

## 🚀 Features

- Uses JavaScript Promises
- Simulates asynchronous operations using `setTimeout()`
- Calculates average marks for each assessment
- Checks candidate performance against cutoff marks
- Uses Promise chaining for sequential evaluation
- Handles errors using `.catch()`
- Displays the final recruitment result

---

## 📂 Recruitment Process

### 1. Coding Assessment

The `codingScoreCheck()` function:

- Accepts an array of coding marks
- Calculates the average score
- Compares the average with the coding cutoff
- Resolves the Promise if the candidate clears the cutoff
- Rejects the Promise if the candidate fails

---

### 2. Technical Interview

The `technicalInterviewCheck()` function:

- Accepts technical interview marks
- Calculates the average score
- Compares the average with the technical cutoff
- Resolves if the candidate passes
- Rejects if the candidate fails

---

### 3. Final Selection Review

The `finalSelectionCheck()` function:

- Takes the coding assessment average
- Takes the technical interview average
- Calculates the final average
- Compares it with the final cutoff
- Determines whether the candidate is selected

---

## 📊 Input Data

```javascript
let codingMarks = [80, 75, 90, 85, 70];
let technicalMarks = [78, 82, 88, 75, 80];

let codingCutoff = 70;
let technicalCutoff = 70;
let finalCutoff = 75;