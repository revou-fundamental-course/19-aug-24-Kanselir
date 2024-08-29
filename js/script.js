// Function to set the Welcome Message with the user's name

document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const userName = prompt("Please enter your name:");
    if (userName) {
        welcomeMessage.innerText = `Hello ${userName}, Welcome to Sixteenagers`;
    }
}); 

// document.getElementById('submitBtn').addEventListener('click', function() {
//     const userName = document.getElementById('nameInput').value;
//     if (userName) {
//         const welcomeMessage = document.getElementById('welcomeMessage');
//         welcomeMessage.innerText = `Hell0 ${userName}, Welcome to Sixteenagers`;
//     }
// });

// Function to show and hide sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Form Validation and Displaying Submitted Data
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;
    const formOutput = document.getElementById('formOutput');

    if (name === '' || dob === '' || gender === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    formOutput.innerHTML = `
        <h3>Form Submitted</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
});
