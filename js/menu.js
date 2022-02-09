const listNav = document.querySelector('.nav-list');
const addNewNav = document.querySelector('.nav-addd');
const contactBox = document.querySelector('.nav-contact');

listNav.addEventListener('click', () => {
    addNewNav.style.display = 'none';
    contactBox.style.display = 'none';
    listNav.style.display = 'block';
  });