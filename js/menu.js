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
  listNav.style.color = 'rgb(59, 59, 219)';
  addNewNav.style.color = 'black';
  contactNav.style.color = 'black';
});
addNewNav.addEventListener('click', () => {
  listBox.style.display = 'none';
  contactBox.style.display = 'none';
  addBox.style.display = 'flex';
  document.querySelector('.title').value = '';
  document.querySelector('.author').value = '';
  addNewNav.style.color = 'rgb(59, 59, 219)';
  listNav.style.color = 'black';
  contactNav.style.color = 'black';
});
contactNav.addEventListener('click', () => {
  listBox.style.display = 'none';
  contactBox.style.display = 'flex';
  addBox.style.display = 'none';
  contactNav.style.color = 'rgb(59, 59, 219)';
  listNav.style.color = 'black';
  addNewNav.style.color = 'black';
});