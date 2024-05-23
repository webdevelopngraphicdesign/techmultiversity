document.addEventListener('DOMContentLoaded', () => {
  const certificatesContent = document.getElementById('certificates-content');
  const badgesContent = document.getElementById('badges-content');

  const certificates = [
      { title: 'Course 1 Completion', date: '2023-01-01' },
      { title: 'Course 2 Completion', date: '2023-02-01' },
  ];

  const badges = [
      { title: 'Quiz Master', description: 'Scored 100% on all quizzes' },
      { title: 'Course Champion', description: 'Completed all courses' },
  ];

  certificates.forEach(cert => {
      const certElement = document.createElement('div');
      certElement.classList.add('certificate');
      certElement.textContent = `${cert.title} - ${cert.date}`;
      certificatesContent.appendChild(certElement);
  });

  badges.forEach(badge => {
      const badgeElement = document.createElement('div');
      badgeElement.classList.add('badge');
      badgeElement.textContent = `${badge.title}: ${badge.description}`;
      badgesContent.appendChild(badgeElement);
  });
});
