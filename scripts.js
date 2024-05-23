/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

document.getElementById("updateForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Fetch form values
    var studentID = document.getElementById("studentID").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    // Send form data to server using AJAX
    // Replace this with your actual update logic
    // For simplicity, just logging the data to console
    console.log("Student ID:", studentID);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);

     // Redirect to dashboard after form submission
  window.location.href = "index.html";
  });


  
  document.addEventListener("DOMContentLoaded", function() {
    var changePasswordForm = document.getElementById('changePasswordForm');

    changePasswordForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var currentPassword = document.getElementById('currentPassword').value;
        var newPassword = document.getElementById('newPassword').value;
        var confirmPassword = document.getElementById('confirmPassword').value;

        // You can add additional validation here if needed

        if (newPassword !== confirmPassword) {
            alert("New passwords do not match");
            return;
        }

        // Here you can make an AJAX request to your server to change the password
        // Example AJAX request using fetch API:
        fetch('YOUR_CHANGE_PASSWORD_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                currentPassword: currentPassword,
                newPassword: newPassword
            })
        })
        .then(response => {
            if (response.ok) {
                alert("Password changed successfully");
                // Redirect the user back to the dashboard
                window.location.href = 'index.html';
            } else {
                throw new Error('Failed to change password');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Failed to change password");
        });
    });
});





  document.addEventListener("DOMContentLoaded", function() {
    // Initialize Stripe with your publishable API key
    var stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');
  
    // Select all buttons with the class "pay-btn"
    var payButtons = document.querySelectorAll('.pay-btn');
  
    // Iterate over each button and attach a click event listener
    payButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Get the course name and amount from the data attributes of the clicked button
        var courseName = this.dataset.courseName;
        var amount = parseFloat(this.dataset.amount);
  
        // Create a payment intent on your server
        fetch('YOUR_SERVER_ENDPOINT_FOR_PAYMENT_INTENT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ courseName: courseName, amount: amount })
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to create payment intent');
          }
        })
        .then(data => {
          // Call Stripe.js to handle the payment
          return stripe.redirectToCheckout({ sessionId: data.sessionId });
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle error (e.g., display an error message to the user)
        });
      });
    });
  });





  document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { id: 1, name: 'Course 1', progress: 80 },
        { id: 2, name: 'Course 2', progress: 60 },
        { id: 3, name: 'Course 3', progress: 40 },
    ];

    const coursesContainer = document.getElementById('courses-container');

    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');

        const courseTitle = document.createElement('h2');
        courseTitle.textContent = course.name;
        courseElement.appendChild(courseTitle);

        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');

        const progressBarFill = document.createElement('span');
        progressBarFill.classList.add('progress-bar-fill');
        progressBarFill.style.width = `${course.progress}%`;
        progressBar.appendChild(progressBarFill);

        courseElement.appendChild(progressBar);

        const viewDetailsButton = document.createElement('a');
        viewDetailsButton.classList.add('view-details');
        viewDetailsButton.href = `course-dashboard.html?courseId=${course.id}`;
        viewDetailsButton.textContent = 'View Details';

        courseElement.appendChild(viewDetailsButton);

        coursesContainer.appendChild(courseElement);
    });
});