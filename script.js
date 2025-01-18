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
