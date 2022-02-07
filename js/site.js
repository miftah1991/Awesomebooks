let booksList = [];
let id=0;
const Books = function (title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  };
const addBookbtn = document.querySelector('.Add');
const container = document.querySelector('.list-show');

addBookbtn.addEventListener('click', () => addNewBook());
function addNewBook(){
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const book = {
        id,
        title,
        author,
    };
    booksList.push(book);
    id++;
    saveDataLocalStorage(booksList);
    generateBooks();
}
function saveDataLocalStorage(booksList){
    localStorage.setItem('books', JSON.stringify(booksList));
}

function generateBooks(){
    if(localStorage.getItem('books') !=null){
        booksList =JSON.parse(localStorage.getItem('books'));
        console.log(booksList);
        let list  ='<ul>';
        booksList.forEach((element,index )=> {
            list += 
            `<li>
            <div>${element.title}</div>
            <div>${element.author}</div>
            <div><button type="btn" onclick="remove(${index})">remove</button</div>
            </li>
            `;
        });
        list += '</ul>'
        container.innerHTML = list;
    }
}

window.onload = generateBooks();

function remove(index) {
    booksList = booksList.filter((book, ind) => ind !== index);
    saveDataLocalStorage(booksList);
    generateBooks();
}