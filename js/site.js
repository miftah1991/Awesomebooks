let booksList = [];
const addBookbtn = document.querySelector('.Add');
const container = document.getElementById('book-lis');
function saveDataLocalStorage(booksList) {
  localStorage.setItem('books', JSON.stringify(booksList));
}
function remove(index) {
  booksList = booksList.filter((book, ind) => ind !== index);
  saveDataLocalStorage(booksList);
}

function generateBooks() {
  container.innerHTML = '';
  if (localStorage.getItem('books') != null) {
    booksList = JSON.parse(localStorage.getItem('books'));
    booksList.forEach((element, index) => {
      const li = document.createElement('li');
      const titleDiv = document.createElement('div');
      titleDiv.className = 'book-title';
      titleDiv.textContent = element.title;
      li.appendChild(titleDiv);
      const authoorDiv = document.createElement('div');
      authoorDiv.className = 'book-authoor';
      authoorDiv.textContent = element.title;
      li.appendChild(authoorDiv);
      const removebtn = document.createElement('button');
      removebtn.className = 'remove-button';
      removebtn.textContent = 'Remove';
      // list
      //       += `<li>
      //       <div>${element.title}</div>
      //       <div>${element.author}</div>
      //         <div><button type="button" id="btn${index}" >remove</button</div>
      //       </li>
      //       `;
      // console.log(list);
      // container.append(list)
      // const rbtn = document.getElementById('btn'+index);
      removebtn.addEventListener('click', () => {
        remove(index);
        generateBooks();
      });
      li.appendChild(removebtn);
      container.append(li);
    });
    // list += '</ul>';
  }
}

function addNewBook() {
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  const book = {
    title,
    author,
  };
  booksList.push(book);
  saveDataLocalStorage(booksList);
  generateBooks();
}
addBookbtn.addEventListener('click', () => addNewBook());

window.onload = generateBooks();
