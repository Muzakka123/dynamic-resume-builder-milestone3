function addExperience() {
    const experienceContainer = document.getElementById("experienceContainer");
    const newExperience = document.createElement("div");
    newExperience.className = "experience-item";
    newExperience.innerHTML = `
        <label for="jobTitleInput">Job Title:</label>
        <input type="text" class="jobTitleInput" placeholder="Enter job title">

        <label for="companyInput">Company Name:</label>
        <input type="text" class="companyInput" placeholder="Enter company name">

        <label for="durationInput">Duration:</label>
        <input type="text" class="durationInput" placeholder="e.g., Jan 2020 - Dec 2021">

        <label for="responsibilitiesInput">Responsibilities:</label>
        <textarea class="responsibilitiesInput" placeholder="Describe your responsibilities..."></textarea>
    `;
    experienceContainer.appendChild(newExperience);
}

function generateResume() {
    // Get basic information
    const name = document.getElementById("nameInput").value;
    const title = document.getElementById("titleInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneInput").value;
    const address = document.getElementById("addressInput").value;
    const summary = document.getElementById("summaryInput").value;
    const skills = document.getElementById("skillsInput").value.split(',').map(skill => skill.trim());
    const languages = document.getElementById("languagesInput").value.split(',').map(lang => lang.trim());
    const hobbies = document.getElementById("hobbiesInput").value.split(',').map(hobby => hobby.trim());
    const certifications = document.getElementById("certificationsInput").value;
    const projects = document.getElementById("projectsInput").value;

    // Get experience information
    const experienceItems = document.querySelectorAll('.experience-item');
    const experienceData = [];
    experienceItems.forEach(item => {
        const jobTitle = item.querySelector('.jobTitleInput').value;
        const company = item.querySelector('.companyInput').value;
        const duration = item.querySelector('.durationInput').value;
        const responsibilities = item.querySelector('.responsibilitiesInput').value;
        if (jobTitle || company || duration || responsibilities) {
            experienceData.push({ jobTitle, company, duration, responsibilities });
        }
    });

    // Populate resume
    document.getElementById("displayName").innerText = name;
    document.getElementById("displayTitle").innerText = title;
    document.getElementById("displayEmail").href = `mailto:${email}`;
    document.getElementById("displayPhone").innerText = phone;
    document.getElementById("displayAddress").innerText = address;
    document.getElementById("displaySummary").innerText = summary;

    // Populate experience section
    const displayExperience = document.getElementById("displayExperience");
    displayExperience.innerHTML = '';
    experienceData.forEach(exp => {
        displayExperience.innerHTML += `<p><strong>${exp.jobTitle}</strong> at ${exp.company} (${exp.duration})<br>${exp.responsibilities}</p>`;
    });

    // Populate skills
    const displaySkills = document.getElementById("displaySkills");
    displaySkills.innerHTML = '';
    skills.forEach(skill => {
        displaySkills.innerHTML += `<li>${skill}</li>`;
    });

    // Populate languages
    document.getElementById("displayLanguages").innerText = languages.join(', ');

    // Populate hobbies
    document.getElementById("displayHobbies").innerText = hobbies.join(', ');

    // Populate certifications
    document.getElementById("displayCertifications").innerText = certifications;

    // Populate projects
    document.getElementById("displayProjects").innerText = projects;

    // Show the resume container
    document.getElementById("resumeContainer").style.display = "block";
}
