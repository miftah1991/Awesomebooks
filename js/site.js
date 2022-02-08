let booksList = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  generateBooks() {
    container.innerHTML = "";
    if (localStorage.getItem("books") != null) {
      booksList = JSON.parse(localStorage.getItem("books"));
      booksList.forEach((element, index) => {
        const li = document.createElement("li");
        const titleDiv = document.createElement("div");
        titleDiv.className = "book-title";
        titleDiv.textContent = element.title;
        li.appendChild(titleDiv);
        const authoorDiv = document.createElement("div");
        authoorDiv.className = "book-authoor";
        authoorDiv.textContent = element.title;
        li.appendChild(authoorDiv);
        const removebtn = document.createElement("button");
        removebtn.className = "remove-button";
        removebtn.textContent = "Remove";

        removebtn.addEventListener("click", () => {
          remove(index);
          generateBooks();
        });
        li.appendChild(removebtn);
        container.append(li);
      });
    }
  }

  saveDataLocalStorage(booksList) {
    localStorage.setItem("books", JSON.stringify(booksList));
  }

  remove(index) {
    booksList = booksList.filter((book, ind) => ind !== index);
    saveDataLocalStorage(booksList);
  }
  addNewBook() {
    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;
    const book = {
      title,
      author,
    };
    booksList.push(book);
    saveDataLocalStorage(booksList);
    generateBooks();
  }
}

const book = new Book();

const addBookbtn = document.querySelector(".Add");
const container = document.getElementById("book-lis");

addBookbtn.addEventListener("click", () => addNewBook());

window.onload = generateBooks();
