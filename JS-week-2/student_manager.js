const class07Students = [];

function addStudentToClass(studentName) {
    if (studentName === "") {
        console.log("Empty string not allowed");
    } else if (class07Students.includes(studentName)) {
        console.log("Student " + studentName + " is already in the class");
    } else if (class07Students.length >= 7 && studentName !== "Queen") {
        console.log("Cannot add more students to class 07");
    } else {
        class07Students.push(studentName);
    }
}

function getNumberOfStudents() {
    console.log(class07Students.length);
}

addStudentToClass("Test1");
addStudentToClass("Test1");
addStudentToClass("Test3");
addStudentToClass("Test4");
addStudentToClass("Test5");
addStudentToClass("test6");
addStudentToClass("Test7");
addStudentToClass("Test8");
addStudentToClass("Queen");

getNumberOfStudents();