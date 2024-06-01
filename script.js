document.addEventListener('DOMContentLoaded', function() {
    var darkModeToggle = document.getElementById('darkModeToggle');
    var modeLabel = document.getElementById('modeLabel');

    // Load the dark mode preference from local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
        modeLabel.textContent = 'Dark Mode';
    }

    darkModeToggle.addEventListener('change', function() {
        if (darkModeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
            modeLabel.textContent = 'Dark Mode';
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
            modeLabel.textContent = 'Light Mode';
        }
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var errorMessage = document.getElementById('error-message');

        if (username === '' || password === '') {
            errorMessage.textContent = 'Bitte füllen Sie alle Felder aus.';
            errorMessage.style.display = 'block';
            return;
        }

        // Client-side validation passed, submit the form
        this.submit();
    });
});
