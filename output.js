let updateIndex = -1;

function updateButtonClicked(buttonId, currentIndex, formDataArray) {
    // Redirect cursor to the first field of the form and place data back into the field
    document.getElementById("fname").focus();

    // Populate form fields with the retrieved data
    document.getElementById("fname").value = formDataArray[currentIndex].fname;
    document.getElementById("lname").value = formDataArray[currentIndex].lname;
    document.getElementById("street").value = formDataArray[currentIndex].street;
    document.getElementById("city").value = formDataArray[currentIndex].city;
    document.getElementById("state").value = formDataArray[currentIndex].state;
    document.getElementById("zip").value = formDataArray[currentIndex].zip;
    document.getElementById("phone").value = formDataArray[currentIndex].phone;
    document.getElementById("email").value = formDataArray[currentIndex].email;
    document.getElementById("coverLetter").value = formDataArray[currentIndex].coverLetter;
    document.getElementById("educationLevel").value = formDataArray[currentIndex].educationLevel;
    document.getElementById("schoolName").value = formDataArray[currentIndex].schoolName;
    document.getElementById("stdyArea").value = formDataArray[currentIndex].stdyArea;
    document.getElementById("gradYear").value = formDataArray[currentIndex].gradYear;
    document.getElementById("prevTitle").value = formDataArray[currentIndex].prevTitle;
    document.getElementById("companyNames").value = formDataArray[currentIndex].companyNames;
    document.getElementById("employmentDates").value = formDataArray[currentIndex].employmentDates;
    document.getElementById("jobResponsibilities").value = formDataArray[currentIndex].jobResponsibilities;
    document.getElementById("relevantSkills").value = formDataArray[currentIndex].relevantSkills;
    document.getElementById("certifications").value = formDataArray[currentIndex].certifications;
    document.getElementById("startDate").value = formDataArray[currentIndex].startDate;
    document.getElementById("workSchedule").value = formDataArray[currentIndex].workSchedule;
    document.getElementById("relocate").value = formDataArray[currentIndex].relocate;
    document.getElementById("referenceName").value = formDataArray[currentIndex].referenceName;
    document.getElementById("referenceContact").value = formDataArray[currentIndex].referenceContact;
    document.getElementById("relationship").value = formDataArray[currentIndex].relationship;
    document.getElementById("reasonToWork").value = formDataArray[currentIndex].reasonToWork;
    document.getElementById("agreeCheckbox").checked = formDataArray[currentIndex].agreeCheckbox;
    document.getElementById("privacyPolicyCheckbox").checked = formDataArray[currentIndex].privacyPolicyCheckbox;

    // Disable the submit button and enable the update button
    document.getElementById("submitW").disabled = true;
    document.getElementById("updateW").disabled = false;

    // Event listener for update button
    document.getElementById("updateW").addEventListener("click", function () {
        // Update the data in the array
        formDataArray[currentIndex] = {
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
}

function deleteButtonClicked(buttonId, currentIndex, formDataArray) {
    console.log("Delete button clicked for index: " + currentIndex);

    // Remove the row from the table
    let rowId = "row" + currentIndex;
    document.getElementById(rowId).remove();

    // Remove the element from the array
    formDataArray.splice(currentIndex, 1);

    // Update the array index for each element
    for (let i = 0; i < formDataArray.length; i++) {
        formDataArray[i].srno = i;
    }

    // Update the local storage with the modified array
    localStorage.setItem("formDataArray", JSON.stringify(formDataArray));
    location.reload();
}

function addRowsToTable(formDataArray) {
    let table = document.getElementById("tableb");

    for (let i = 0; i < formDataArray.length; i++) {
        const formData = formDataArray[i];

        let row = document.createElement("tr");
        row.id = "row" + i;

        for (let key in formData) {
            let cell = document.createElement("td");
            cell.textContent = formData[key];
            row.appendChild(cell);
        }

        // Dynamic update and delete buttons
        let updateButton = document.createElement("button");
        let deleteButton = document.createElement("button");

        updateButton.id = "ub" + i;
        deleteButton.id = "db" + i;

        updateButton.type = "button";
        deleteButton.type = "button";

        updateButton.className = "btn btn-warning ms-2 mt-3";
        deleteButton.className = "btn btn-warning ms-2 mt-3";

        updateButton.textContent = "Update";
        deleteButton.textContent = "Delete";

        updateButton.onclick = function () {
            updateButtonClicked(updateButton.id, i, formDataArray);
        };

        deleteButton.onclick = function () {
            deleteButtonClicked(deleteButton.id, i, formDataArray);
        };

        row.appendChild(updateButton);
        row.appendChild(deleteButton);

        table.appendChild(row);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMCONTENTLOADED OUTPUTSCRIPT");

    // Retrieve data from local storage
    const stringReceived = localStorage.getItem("formDataArray");

    if (stringReceived !== null) {
        const formDataArray = JSON.parse(stringReceived);

        console.log("Overall data: ");
        for (let i = 0; i < formDataArray.length; i++) {
            const formData = formDataArray[i];
        }

        addRowsToTable(formDataArray);

        // Event listener for the update button
        document.getElementById("updateW").addEventListener("click", function () {
            console.log("Update made to row: " + updateIndex);

            // Update local storage with the modified array
            localStorage.setItem("formDataArray", JSON.stringify(formDataArray));
            location.reload();
        });
    }
});
