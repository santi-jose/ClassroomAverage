// import student data from studentData.js
import { students } from "./studentData.js";

// function to render student table from table element and array of student data 
// table: a reference to an HTML table where data will be displayed
// data: student data from studentData.js
function renderStudentTable(table, data) {
    // create thead to append to table
    const thead = document.createElement("thead");
    const trow = document.createElement("tr"); // create a table row

    // array to store table headers
    const headers = ["ID", "Name", "Address", "Average Grade"];

    // iterate through headers  array and create table headers
    for (let i = 0; i < headers.length; i++) {
        const th = document.createElement("th");
        th.innerText = headers[i];
        trow.appendChild(th);
    }

    // append table row of headers to table head
    thead.appendChild(trow);

    // append thead to table element
    table.appendChild(thead);

    // create a tbody element to append our new rows to
    const tbody = document.createElement("tbody");

    // iterate through student data
    for (let i = 0; i < data.length; i++) {
        // call renderRow function to create a row of our student object
        renderRow(tbody, data[i]);
    }

    // append tbody to table
    table.appendChild(tbody);
}

// helper function that renders a row of our table
// tbody: the table body element in our HTML
// student: the current student object we are making into a row
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

            // add event listener to input
            input.addEventListener("change", updateGrade);

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
    console.log("calling updateGrade() function");
}

// get student-table table from index.html
const studentTable = document.getElementById("student-table");

// render student table
renderStudentTable(studentTable, students);