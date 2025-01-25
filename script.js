function langName(tabName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default
    const tabcontent = document.querySelectorAll('.tabcontent');
    tabcontent.forEach(content => content.style.display = 'none');

    // Remove "active" class from all tab buttons
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the selected tab content
    document.getElementById(tabName).style.display = 'block';

    // Highlight the current tab button
    elmnt.classList.add('active');
}

// Set default tab
document.getElementById('defaultOpen').click();

function navigateToServices() {
    // Activate the Services tab (if using tabs)
    document.querySelectorAll(".tabcontent").forEach(tab => {
        tab.style.display = "none"; // Hide other tabs
    });

    // Show the Services tab
    document.getElementById("Services").style.display = "block";

    // Scroll to the Services section
    document.getElementById("Services").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Handle modal display
function scheduleNow(service) {
    const modal = document.getElementById("scheduleModal");
    const serviceField = document.getElementById("service");

    // Set the service dropdown value
    const options = Array.from(serviceField.options);
    const matchingOption = options.find(option => option.value === service);
    if (matchingOption) {
        serviceField.value = service; // Set the selected service
    } else {
        serviceField.selectedIndex = 0; // Default to "Select a service" if no match
    }

    modal.style.display = "block"; // Show the modal
}


// Close modal
function closeModal() {
    const modal = document.getElementById("scheduleModal");
    modal.style.display = "none"; // Hide the modal
}


// Handle form submission
function handleFormSubmit(event) {
    document.getElementById("scheduleForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload
        
        const formData = new FormData(event.target);
    
        const appointmentDetails = {
            service: formData.get("service"),
            name: formData.get("name"),
            email: formData.get("email"),
            date: formData.get("date"),
            time: formData.get("time"),
            phone: formData.get("phone"),
        };
    
        console.log("Appointment Scheduled:", appointmentDetails);
        alert("Your appointment has been scheduled successfully!");
    
        // Close modal after form submission
        closeModal();
    });    
}

// Close the modal if user clicks outside it
window.onclick = function(event) {
    const modal = document.getElementById("scheduleModal");
    if (event.target === modal) {
        closeModal();
    }
};

