// Publications toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.getElementById('publications-toggle-switch');
  const selectedPublications = document.getElementById('selected-publications');
  const allPublications = document.getElementById('all-publications');

  if (toggleSwitch && selectedPublications && allPublications) {
    toggleSwitch.addEventListener('change', function() {
      if (this.checked) {
        // Show all publications
        selectedPublications.style.display = 'none';
        allPublications.style.display = 'block';
      } else {
        // Show selected publications
        selectedPublications.style.display = 'block';
        allPublications.style.display = 'none';
      }
    });
  }
});
