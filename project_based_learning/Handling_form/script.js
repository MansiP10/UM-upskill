const userData = document.getElementById('userData');
const EnrollmentData = document.getElementById('EnrollmentData');

const submitBtn = document.getElementById("submitBtn");
userData.addEventListener("submit",function(event){
    event.preventDefault();
    const userFullName = document.querySelector("#userFullName").value;
    const phoneNumber = document.querySelector("#phoneNumber").value;
    const userEmail = document.querySelector("#userEmail").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const education = document.querySelector('input[name="education"]:checked').value;
    const selectEmploymentType =  document.querySelector('#selectEmploymentType').value;
    const learningMotivation =  document.querySelector('#learningMotivation').value;
    const sourcesCheckbox = document.querySelectorAll('input[name="sources"]:checked');
    const selectedSources =[];
    for(let i=0; i< sourcesCheckbox.length; i++){
        selectedSources.push(sourcesCheckbox[i].value);
    }

    const userEnteredData = `
    <h2>User Entered Data</h2>
    <p>Name: <strong></strong>${userFullName}</p>
    <p>Phone Number: <strong></strong>${phoneNumber}</p>
    <p>Email: <strong></strong>${userEmail}</p>
    <p>Gender: <strong></strong>${gender}</p>
    <p>Education: <strong></strong>${education}</p>
    <p>Employment Type: <strong></strong>${selectEmploymentType}</p>
    <p>Sources: <strong></strong>${selectedSources.join(", ")}</p>
    `;

    EnrollmentData.innerHTML = `${userEnteredData}`;
})