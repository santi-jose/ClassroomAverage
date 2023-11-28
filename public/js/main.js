// main application logic

// imports from other modules
import { renderStudentTable, updateGrade } from "./studentTable.js";
import { calculateClassroomAverage } from "./calculateClassroomAverage.js";
import { students } from "./studentData.js";

// global variables
const studentTable = document.getElementById("student-table"); // get student table element
const classroomAverage = document.getElementById("classroom-average");
let classAvgVal = 0; // initialize classroom average

document.addEventListener("DOMContentLoaded", function(){
    // render student table
    renderStudentTable(studentTable, students);

    // calculate classroom average
    classAvgVal = calculateClassroomAverage(students);

    // update classroom average value
    classroomAverage.innerText = `Classroom Average: ${classAvgVal}`;
});
