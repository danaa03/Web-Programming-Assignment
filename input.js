document.addEventListener("DOMContentLoaded", function () {
    let formDataArray = [];

    // Check if formDataArray exists in localStorage
    if (localStorage.getItem("formDataArray")) {
        formDataArray = JSON.parse(localStorage.getItem("formDataArray"));
        displayFormData(); // Display existing data on page load
    }

    // Event listener for form submission
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission from reloading the page

        // Validate all input fields before submitting
        if (validateForm()) {
            // Get form input values
            let fname = document.getElementById("fname").value;
            let lname = document.getElementById("lname").value;
            let street = document.getElementById("street").value;
            let city = document.getElementById("city").value;
            let state = document.getElementById("state").value;
            let zip = document.getElementById("zip").value;
            let phone = document.getElementById("phone").value;
            let email = document.getElementById("email").value;
            let coverLetter = document.getElementById("coverLetter").value;
            let educationLevel = document.getElementById("educationLevel").value;
            let schoolName = document.getElementById("schoolName").value;
            let stdyArea = document.getElementById("stdyArea").value;
            let gradYear = document.getElementById("gradYear").value;
            let prevTitle = document.getElementById("prevTitle").value;
            let companyNames = document.getElementById("companyNames").value;
            let employmentDates = document.getElementById("employmentDates").value;
            let jobResponsibilities = document.getElementById("jobResponsibilities").value;
            let relevantSkills = document.getElementById("relevantSkills").value;
            let certifications = document.getElementById("certifications").value;
            let startDate = document.getElementById("startDate").value;
            let workSchedule = document.getElementById("workSchedule").value;
            let relocate = document.getElementById("relocate").value;
            let referenceName = document.getElementById("referenceName").value;
            let referenceContact = document.getElementById("referenceContact").value;
            let relationship = document.getElementById("relationship").value;
            let reasonToWork = document.getElementById("reasonToWork").value;
            let agreeCheckbox = document.getElementById("agreeCheckbox").checked;
            let privacyPolicyCheckbox = document.getElementById("privacyPolicyCheckbox").checked;

            // Create a formData object
            const formData = {
                fname: fname,
                lname: lname,
                street: street,
                city: city,
                state: state,
                zip: zip,
                phone: phone,
                email: email,
                coverLetter: coverLetter,
                educationLevel: educationLevel,
                schoolName: schoolName,
                stdyArea: stdyArea,
                gradYear: gradYear,
                prevTitle: prevTitle,
                companyNames: companyNames,
                employmentDates: employmentDates,
                jobResponsibilities: jobResponsibilities,
                relevantSkills: relevantSkills,
                certifications: certifications,
                startDate: startDate,
                workSchedule: workSchedule,
                relocate: relocate,
                referenceName: referenceName,
                referenceContact: referenceContact,
                relationship: relationship,
                reasonToWork: reasonToWork,
                agreeCheckbox: agreeCheckbox,
                privacyPolicyCheckbox: privacyPolicyCheckbox
            };

            // Add the new formData to the array
            formDataArray.push(formData);

            // Store the updated array back in localStorage
            localStorage.setItem("formDataArray", JSON.stringify(formDataArray));

            // Clear form fields
            document.getElementById("form").reset();

            // Display the updated data on the page
            displayFormData();

            alert("Your information has been recorded!");
        }
    });

    // Function to validate the form
    function validateForm() {
        const requiredFields = ["fname", "lname", "street", "city", "state", "zip", "phone", "email", "coverLetter", "educationLevel", "schoolName", "stdyArea", "gradYear", "prevTitle", "companyNames", "employmentDates", "jobResponsibilities", "relevantSkills", "certifications", "startDate", "workSchedule", "relocate", "referenceName", "referenceContact", "relationship", "reasonToWork", "agreeCheckbox", "privacyPolicyCheckbox"];

        for (const field of requiredFields) {
            const value = document.getElementById(field).value.trim();
            if (value === "") {
                alert(`Please fill in the "${field}" field.`);
                return false;
            }
        }

        return true;
    }

    // Rest of your existing code...

    // Function to display form data on the page
    function displayFormData() {
        // Get the table body
        let tableBody = document.querySelector("#tableb tbody");

        // Clear existing table rows and headers
        tableBody.innerHTML = "";

        // Add table headers dynamically based on form data keys
        let headerRow = tableBody.insertRow();
        for (let key in formDataArray[0]) {
            let headerCell = document.createElement("th");
            headerCell.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter
            headerRow.appendChild(headerCell);
        }

        // Iterate through formDataArray and create table rows
        formDataArray.forEach(function (data, index) {
            let row = tableBody.insertRow();

            // Populate cells dynamically based on form data keys
            for (let key in data) {
                let cell = row.insertCell();
                cell.textContent = data[key];
            }

            // Add an additional cell for the Edit button
            let editCell = row.insertCell();
            editCell.innerHTML = `<button type="button" class="btn btn-secondary" onclick="editData(${index})">Edit</button>`;
        });
    }

    // Function to edit data based on index
    window.editData = function (index) {
        // Retrieve the data for the given index
        let data = formDataArray[index];

        // Populate form fields with the retrieved data
        document.getElementById("fname").value = data.fname;
        document.getElementById("lname").value = data.lname;
        document.getElementById("street").value = data.street;
        document.getElementById("city").value = data.city;
        document.getElementById("state").value = data.state;
        document.getElementById("zip").value = data.zip;
        document.getElementById("phone").value = data.phone;
        document.getElementById("email").value = data.email;
        document.getElementById("coverLetter").value = data.coverLetter;
        document.getElementById("educationLevel").value = data.educationLevel;
        document.getElementById("schoolName").value = data.schoolName;
        document.getElementById("stdyArea").value = data.stdyArea;
        document.getElementById("gradYear").value = data.gradYear;
        document.getElementById("prevTitle").value = data.prevTitle;
        document.getElementById("companyNames").value = data.companyNames;
        document.getElementById("employmentDates").value = data.employmentDates;
        document.getElementById("jobResponsibilities").value = data.jobResponsibilities;
        document.getElementById("relevantSkills").value = data.relevantSkills;
        document.getElementById("certifications").value = data.certifications;
        document.getElementById("startDate").value = data.startDate;
        document.getElementById("workSchedule").value = data.workSchedule;
        document.getElementById("relocate").value = data.relocate;
        document.getElementById("referenceName").value = data.referenceName;
        document.getElementById("referenceContact").value = data.referenceContact;
        document.getElementById("relationship").value = data.relationship;
        document.getElementById("reasonToWork").value = data.reasonToWork;
        document.getElementById("agreeCheckbox").checked = data.agreeCheckbox;
        document.getElementById("privacyPolicyCheckbox").checked = data.privacyPolicyCheckbox;

        // Disable the submit button and enable the update button
        document.getElementById("submitW").disabled = true;
        document.getElementById("updateW").disabled = false;

        // Event listener for update button
        document.getElementById("updateW").addEventListener("click", function () {
            // Update the data in the array
            formDataArray[index] = {
                fname: document.getElementById("fname").value,
                lname: document.getElementById("lname").value,
                street: document.getElementById("street").value,
                city: document.getElementById("city").value,
                state: document.getElementById("state").value,
                zip: document.getElementById("zip").value,
                phone: document.getElementById("phone").value,
                email: document.getElementById("email").value,
                coverLetter: document.getElementById("coverLetter").value,
                educationLevel: document.getElementById("educationLevel").value,
                schoolName: document.getElementById("schoolName").value,
                stdyArea: document.getElementById("stdyArea").value,
                gradYear: document.getElementById("gradYear").value,
                prevTitle: document.getElementById("prevTitle").value,
                companyNames: document.getElementById("companyNames").value,
                employmentDates: document.getElementById("employmentDates").value,
                jobResponsibilities: document.getElementById("jobResponsibilities").value,
                relevantSkills: document.getElementById("relevantSkills").value,
                certifications: document.getElementById("certifications").value,
                startDate: document.getElementById("startDate").value,
                workSchedule: document.getElementById("workSchedule").value,
                relocate: document.getElementById("relocate").value,
                referenceName: document.getElementById("referenceName").value,
                referenceContact: document.getElementById("referenceContact").value,
                relationship: document.getElementById("relationship").value,
                reasonToWork: document.getElementById("reasonToWork").value,
                agreeCheckbox: document.getElementById("agreeCheckbox").checked,
                privacyPolicyCheckbox: document.getElementById("privacyPolicyCheckbox").checked
            };

            // Store the updated array back in localStorage
            localStorage.setItem("formDataArray", JSON.stringify(formDataArray));

            // Clear form fields
            document.getElementById("form").reset();

            // Enable the submit button and disable the update button
            document.getElementById("submitW").disabled = false;
            document.getElementById("updateW").disabled = true;

            // Display the updated data on the page
            displayFormData();
        });
    };
});