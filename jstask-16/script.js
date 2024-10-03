const searchResult = document.getElementById("searchResult");
const StudSearchForm = document.getElementById('searchDiv');
const searchBtn = document.getElementById("searchBtn");
let students=[
    { name:"Salman Ahmed", marks:"38", class:"3rd", address:"India"},
    { name:"Riya Sharma", marks:"85", class:"10th", address:"123,ABC Colony, Delhi"},
    { name:"Rohan Patel", marks:"70", class:"12th", address:"456, XYZ Street, Mumbai"},
    { name:"Priya Singh", marks:"95", class:"8th", address:"789, PQR Nagar, Banglore"},
    { name:"Ankit Gupta", marks:"60", class:"9th", address:"101, LMN Road, Kolkata"},
    { name:"Neha Varma", marks:"80", class:"11th", address:"222, DEF Avenue, Chennai"},
    { name:"Manoj Kumar", marks:"75", class:"10th", address:"333, GHI Lane, Hyderabad"},
    { name:"Pooja Mishra", marks:"88", class:"9th", address:"444, STU Colony, Pune"},
    { name:"Mansi Prajapati", marks:"92", class:"12th", address:"555, VWX Street, Jaipur"},
]

function displayStudents(studentsToDisplay) {
    let student_info =[];
    student_info = studentsToDisplay.map(student => `
        <div class="card">
            <p>Student Name: <span>${student.name}</span></p>
            <p>Marks: <span>${student.marks}%</span></p>
            <p>Class: <span>${student.class}</span></p>
            <p>Address: <span>${student.address}</span></p>
        </div>
    `);
    searchResult.innerHTML = student_info.join('');
}

displayStudents(students);

StudSearchForm.addEventListener("submit",function(event){
    event.preventDefault();
});

searchBtn.addEventListener("click",function(){
    const searchkey = document.querySelector("#searchkey").value;
    let filteredStudents = students.filter(student => student.name.startsWith(searchkey));
    console.log(filteredStudents);
    displayStudents(filteredStudents);
});
