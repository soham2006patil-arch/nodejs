// Assignment 1: Promise-Based Recruitment Evaluation System


// Question 1: Coding Assessment
function codingScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sum = 0;

            for (let mark of marks) {
                sum += mark;
            }

            let average = sum / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you have not cleared the Coding Assessment.");
            }
        }, 2000);
    });
}


// Question 2: Technical Interview
function technicalInterviewCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sum = 0;

            for (let mark of marks) {
                sum += mark;
            }

            let average = sum / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you have not cleared the Technical Interview.");
            }
        }, 2000);
    });
}


// Question 3: Final Selection Review
function finalSelectionCheck(codingAverage, technicalAverage, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let finalAverage = (codingAverage + technicalAverage) / 2;

            if (finalAverage >= cutoff) {
                resolve(finalAverage);
            } else {
                reject("Sorry, you have not cleared the final selection cutoff.");
            }
        }, 2000);
    });
}


// Input Data
let codingMarks = [80, 75, 90, 85, 70];
let technicalMarks = [78, 82, 88, 75, 80];

let codingCutoff = 70;
let technicalCutoff = 70;
let finalCutoff = 75;


// Promise Chain
codingScoreCheck(codingMarks, codingCutoff)

    .then((codingAverage) => {
        console.log("Coding Assessment Cleared!");
        console.log("Coding Average:", codingAverage);

        return technicalInterviewCheck(technicalMarks, technicalCutoff)
            .then((technicalAverage) => {
                console.log("Technical Interview Cleared!");
                console.log("Technical Average:", technicalAverage);

                return finalSelectionCheck(
                    codingAverage,
                    technicalAverage,
                    finalCutoff
                );
            });
    })

    .then((finalAverage) => {
        console.log("Final Selection Cleared!");
        console.log("Final Average:", finalAverage);
        console.log("Congratulations! You have been selected.");
    })

    .catch((error) => {
        console.log(error);
    });