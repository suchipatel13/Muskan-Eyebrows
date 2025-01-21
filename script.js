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
