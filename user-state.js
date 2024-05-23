document.addEventListener('DOMContentLoaded', () => {
  // Mock user state (for demonstration purposes)
  // In a real scenario, these values would be fetched from the server or updated based on user actions
  const userState = {
      profileUpdated: localStorage.getItem('profileUpdated') === 'true',
      courseCompleted: localStorage.getItem('courseCompleted') === 'true',
      examPassed: localStorage.getItem('examPassed') === 'true',
  };

  const updateNavigation = () => {
      const navLinks = document.querySelectorAll('.nav-link');

      navLinks.forEach(link => {
          const requireProfileUpdate = link.getAttribute('data-require-profile-update') === 'true';
          const requireCourseCompletion = link.getAttribute('data-require-course-completion') === 'true';
          const requireExamPass = link.getAttribute('data-require-exam-pass') === 'true';

          if (requireProfileUpdate && !userState.profileUpdated) {
              link.href = 'profile_update.html';
              alert('Please update your profile before accessing other pages.');
          } else if (requireCourseCompletion && !userState.courseCompleted) {
              link.href = '#';
              alert('You must complete the course before taking the exam.');
          } else if (requireExamPass && !userState.examPassed) {
              link.href = '#';
              alert('You must pass the exam with at least 50% to access the certificate.');
          }
      });
  };

  updateNavigation();

  // Example of updating user state (to be triggered by actual user actions)
  document.getElementById('update-profile-btn')?.addEventListener('click', () => {
      localStorage.setItem('profileUpdated', 'true');
      userState.profileUpdated = true;
      updateNavigation();
  });

  document.getElementById('complete-course-btn')?.addEventListener('click', () => {
      localStorage.setItem('courseCompleted', 'true');
      userState.courseCompleted = true;
      updateNavigation();
  });

  document.getElementById('pass-exam-btn')?.addEventListener('click', () => {
      const examScore = prompt('Enter your exam score:');
      if (parseInt(examScore, 10) >= 50) {
          localStorage.setItem('examPassed', 'true');
          userState.examPassed = true;
          alert('Congratulations! You have passed the exam.');
      } else {
          alert('You did not pass the exam. Please try again.');
      }
      updateNavigation();
  });
});
