console.log("Pass or Fail Analysis")

const examScores= [67,78,45,89,94,56,72,81,63,90];
const passingScore=50;
let PassCount=0;

for (let i=0; i<examScores.length; i++){
    const score = examScores[i];

    if (score >= passingScore) {
        console.log(`${score} -> PASS`);
        PassCount++;
    } else {
        console.log(`${score} -> FAIL`);
    }
}
console.log(`Total students passed: ${PassCount}`);