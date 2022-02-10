const listNav = document.querySelector('.nav-list');
const addNewNav = document.querySelector('.nav-add');
const contactNav = document.querySelector('.nav-contact');

const listBox = document.querySelector('.books-section');
const addBox = document.querySelector('.books-add-section');
const contactBox = document.querySelector('.contact-us');

listNav.addEventListener('click', () => {
    listBox.style.display = 'flex';
    contactBox.style.display = 'none';
    addBox.style.display = 'none';
  });
  addNewNav.addEventListener('click', () => {
    listBox.style.display = 'none';
    contactBox.style.display = 'none';
    addBox.style.display = 'flex';
  });
  contactNav.addEventListener('click', () => {
    listBox.style.display = 'none';
    contactBox.style.display = 'flex';
    addBox.style.display = 'none';
  });