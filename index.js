// JS If Statements
/*
1.If statement
2.else if statement
3.else statement
*/

const grade = 85;
if(grade >= 90) {
    console.log("Grade A");
} else if(grade >= 87) {
    console.log("Grade B");
} else {
    console.log("You're  doing your best.")
}
// Nested if statements

let age = 20;
let isStudent = true;
let hasDrivingExperiences = 2;
let hasGoodVision = true;
let nonDrunkard = true;
let hasDrivingLicense = true;
let isMarried = true;

if(age >= 18) {
    if(isStudent) {
        if(hasDrivingExperiences >= 1) {
            if(hasGoodVision) {
                if(nonDrunkard) {
                    if(hasDrivingLicense) {
                        console.log("You're qualify to drive.")
                    } else {
                        console.log("You're not eligible to drive.")
                    }
                }
            }
        }
    }
}


// Using Logical Operators
if(
    (age >= 18 && hasDrivingLicense)
     || (isStudent && hasDrivingExperiences >= 1)
      || (hasGoodVision && nonDrunkard) || 
      (hasDrivingLicense && isMarried)) {
        console.log("You're eligible to drive.")

} else {
    console.log("Please buy a driving course online or get a student driving permit.")
}
