// eslint-disable-next-line no-undef
const { DateTime } = luxon;

document.getElementById('currentdate').innerText = DateTime.local().toLocaleString(DateTime.DATETIME_MED);

let booksList = [];

class Book {
  constructor(container) {
    this.container = container;
  }

  generateBooks() {
    this.container.innerHTML = '';
    if (localStorage.getItem('books') != null) {
      booksList = JSON.parse(localStorage.getItem('books'));
      booksList.forEach((element, index) => {
        const li = document.createElement('li');
        li.className = 'elements';
        const titleDiv = document.createElement('div');
        titleDiv.className = 'book-title';
        titleDiv.textContent = `"${element.title}" by ${element.author}`;
        li.appendChild(titleDiv);
        const removebtn = document.createElement('button');
        removebtn.className = 'remove-button';
        removebtn.textContent = 'Remove';

        removebtn.addEventListener('click', () => {
          this.remove(index);
          this.generateBooks();
        });
        li.appendChild(removebtn);
        this.container.append(li);
        if (index % 2 !== 0) {
          li.classList.add('grey-background');
        }
      });
    }
  }

  saveDataLocalStorage = (booksList) => {
    localStorage.setItem('books', JSON.stringify(booksList));
  };

  remove(index) {
    booksList = booksList.filter((book, ind) => ind !== index);
    this.saveDataLocalStorage(booksList);
  }

  addNewBook() {
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    if (title === '' || author === '') {
      const errorLabel = document.querySelector('.validate-error');
      errorLabel.style.display = 'block';
    } else {
      const book = {
        title,
        author,
      };
      booksList.push(book);
      this.saveDataLocalStorage(booksList);
      this.generateBooks();
      this.showbooksection();
    }
  }

  showbooksection = () => {
    document.querySelector('.books-section').style.display = 'flex';
    document.querySelector('.books-add-section').style.display = 'none';
    document.querySelector('.contact-us').style.display = 'none';
  }
}
const book = new Book(document.getElementById('book-lis'));
const addBookbtn = document.querySelector('.Add');
addBookbtn.addEventListener('click', () => book.addNewBook());
window.onload = book.generateBooks();
