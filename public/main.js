const Menu = document.getElementById('cs-top-menu');
const toggleMenuIcon = document.getElementById('cs-toggle-top-menu-icon');

// Toggle the menu when clicking on the button
toggleMenuIcon.addEventListener('click', function (e) {
  Menu.classList.toggle('cs-topmenu-expanded');
  Menu.classList.toggle('hidden');
  e.stopPropagation(); // Prevent click event from propagating to the document
});

// Hide the menu when clicking outside
document.addEventListener('click', function (e) {
  if (!Menu.contains(e.target) && !toggleMenuIcon.contains(e.target)) {
    Menu.classList.remove('cs-topmenu-expanded');
    Menu.classList.add('hidden');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const dateInputs = document.querySelectorAll('input[type="date"]');

  dateInputs.forEach(input => {
    const label = input.nextElementSibling;

    // Check initial value and set label visibility
    if (input.value === '') {
      label.style.display = 'block';
    } else {
      label.style.display = 'none';
    }

    input.addEventListener('focus', function () {
      label.style.display = 'none';
    });

    input.addEventListener('blur', function () {
      if (this.value === '') {
        label.style.display = 'block';
      }
    });
  });
});