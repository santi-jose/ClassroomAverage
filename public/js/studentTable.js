// import student data from studentData.js
import { students } from "./studentData.js";
import { calculateClassroomAverage } from "./calculateClassroomAverage.js";

// function to render student table from table element and array of student data 
// table: a reference to an HTML table where data will be displayed
// data: student data from studentData.js
function renderStudentTable(table, data) {
    // create a tbody element to append our new rows to
    const tbody = document.createElement("tbody");

    // iterate through students data array
    for (let i = 0; i < data.length; i++) {
        // call renderRow function to create a row of our student object
        renderRow(tbody, data[i]);
    }

    // append tbody to table
    table.appendChild(tbody);
}

// helper function that renders a row of our table
// tbody: the table body element in our HTML
// student: the student object we are making into a row
function renderRow(tbody, student) {

    // create row to add data to
    const tr = document.createElement("tr");

    // iterate through key value pairs in our student object
    for (const [key, value] of Object.entries(student)) {
        if (key === "averageGrade") { // if we are in the avaerageGrade column
            const td = document.createElement("td");  // create new td

            // add an input text box to the table data
            const input = document.createElement("input"); // add input element
            input.type = "text"; // set input to type text
            input.value = value; // set default value
            input.student = student; // store reference to student object in input

            // add event listener to input
            input.addEventListener("change", function(){
                updateGrade(input); // call updateGrade with input element as argument
            });

            td.appendChild(input); // append input to td 
            tr.appendChild(td); // append td to tr
        } else {
            const td = document.createElement("td");
            td.innerText = value; // store student's property in td
            tr.appendChild(td); // append td to tr
        }
    }

    // append table row to tbody
    tbody.appendChild(tr);
}

function updateGrade(input){
    // update the student averageGrade to new input value. 
    // student object reference assigned as input property.
    input.student.averageGrade = Number(input.value);

    // recalculate classroom average
    let classAvgVal = calculateClassroomAverage(students);

    // update classroom-average div
    const classroomAverage = document.getElementById("classroom-average");
    classroomAverage.innerText = `Classroom Average: ${classAvgVal}`;
}

// export studentTable
export { renderStudentTable, updateGrade };