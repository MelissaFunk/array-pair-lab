const ourCohort = [
    "Erica Rojo",
    "Natalie Barba",
    "Joe Orekhov",
    "Tina Guliuzza",
    "Gabriel Rodriguez",
    "Shawna Akiona",
    "Charles Oneymem",
    "Melissa Funk",
    "Gabriel Miranda",
]

const coursePhases = [
    {phaseNumber: 1, name: "Vanilla JavaScript", language: "JavaScript", framework: "None"},
    {phaseNumber: 2, name: "JS, React, & Redux", language: "JavaScript", framework: "React"},
    {phaseNumber: 3, name: "Vanilla Ruby", language: "Ruby", framework: "None"},
    {phaseNumber: 4, name: "Rails as an API", language: "Ruby", framework: "Rails"},
    {phaseNumber: 5, name: "Capstone Project", language: "Ruby & JavaScript", framework: "Rails & React"}
]

// Write your functions here!

function sortCohortDesc(){
    ourCohort.sort()    
    return ourCohort.reverse()
}

function shortNames(){
    return ourCohort.filter(ourCohort => ourCohort.length < 15);
}

function cohortSize(){
    return ourCohort.length;
}

function locateStudent(stringArg){
    return ourCohort.find((student) => student === stringArg);
}

function phaseNames(){
    return coursePhases.map(obj => obj['name']);
}

function cohortPhases(){
    return coursePhases.filter(obj => obj.language === "JavaScript");
}


function allTheGabes(){
    return ourCohort.filter(obj => obj.slice(0, 7) === "Gabriel");
}

function studentAndPhase(){
    return ourCohort.map(obj => obj + 'is currently in Phase 1!');
}

function sortPhasesByName(){
    return coursePhases.sort(function (a, z) {
        if (a.name < z.name){
            return -1;
        } else {
            return 1;
        }
    });
}   

  


// You don't have to change anything below this line
// These console logs are for you to check your work in the browser console.

console.log(sortCohortDesc())
console.log(shortNames())
console.log(cohortSize())
console.log(locateStudent("Joe Orekhov"))
console.log(phaseNames())
console.log(cohortPhases())
console.log(allTheGabes())
console.log(studentAndPhase())
console.log(sortPhasesByName())
