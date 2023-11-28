// takes students array as input 
// calculates average of students grade
// and returns that average.
function calculateClassroomAverage(students){
    // initialize sum variable to store sum of
    // student grades
    let sum = 0;

    // iterate through students in array
    for(const student of students){
        // calculate sum of student grades
        sum = sum + student.averageGrade;
    }

    // calculate average by dividing by students.length
    const avg = sum/students.length;

    // return average
    return avg;
}

// export for use in other modules
export { calculateClassroomAverage };