const rgb = 255;
const myLibrary = [];

function Book(title, author, pages, read, index, red, green, blue) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
    this.red = red;
    this.green = green;
    this.blue = blue;
}

function addBookToLibrary(title, author, pages, read, index, red, green, blue) {
    const book = new Book(title, author, pages, read, index, red, green, blue);
    myLibrary.push(book);
    return book;
}

const content = document.querySelector(".content");
const sidebar = document.querySelector(".sidebar");
const newBook = document.querySelector(".newBook");
const addButton = document.querySelector(".submitButton");
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const newBookButton = document.querySelector(".newBookBtn");

newBookButton.addEventListener("click", () => {
    sidebar.appendChild(newBook);
})

newBook.onsubmit = function(event) {
    event.preventDefault();
    const r = rnd(rgb);
    const g = rnd(rgb);
    const b = rnd(rgb);
    addBookToLibrary(title.value, author.value, pages.value, read.value, myLibrary.length, r, g, b);
    newBook.title.value = "";
    newBook.author.value = "";
    newBook.pages.value = "";
    sidebar.removeChild(newBook);
    populateLibrary();
}

function populateLibrary() {
    const bookShelf = document.querySelectorAll('.book');
    for (let i = 0; i < bookShelf.length; i++) {
        bookShelf[i].remove();
    }
    for (let j = 0; j < myLibrary.length; j++) {
        const newBookElement = document.createElement('div');
        const bookTitle = document.createElement('span');
        const bookAuthor = document.createElement('span');
        const bookRead = document.createElement('button');
        newBookElement.classList.add('book');
        bookAuthor.textContent = myLibrary[j].author;
        bookAuthor.classList.add('bookText');
        bookTitle.textContent = myLibrary[j].title;
        bookTitle.classList.add('bookText');
        if (myLibrary[j].read === 'Yes') {
          bookRead.textContent = 'read';
        }
        else {
          bookRead.textContent = 'not read';
        }
        newBookElement.appendChild(bookTitle);
        newBookElement.appendChild(bookAuthor);
        newBookElement.style.backgroundColor = `rgb(${myLibrary[j].red},${myLibrary[j].green},${myLibrary[j].blue})`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = `remove`;
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(j, 1);
            populateLibrary();
        })
      newBookElement.appendChild(removeBtn);
      bookRead.addEventListener('click', () => {
        if (myLibrary[j].read === 'Yes')
        {
          myLibrary[j].read = 'No';
        }
        else {
          myLibrary[j].read = 'Yes';
        }
        populateLibrary();
      })
      newBookElement.appendChild(bookRead);
      content.appendChild(newBookElement);
    }
}

function rnd(val) {
    return Math.floor(Math.random() * val);
}