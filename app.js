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
  this.toggleRead = function () {
    if (this.read === 'Yes')
      {
      this.read = 'No'
    }
    else
    {
      this.read = 'Yes'
      }
  }
}

function addBookToLibrary(title, author, pages, read, index, red, green, blue) {
    const book = new Book(title, author, pages, read, index, red, green, blue);
    myLibrary.push(book);
    return book;
}

const content = document.querySelector('.content');
const sidebar = document.querySelector('.sidebar');
const newBook = document.querySelector('.newBook');
const addButton = document.querySelector('.submitButton');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const newBookButton = document.querySelector('.newBookBtn');

newBookButton.addEventListener("click", () => {
    sidebar.appendChild(newBook);
})

newBook.onsubmit = function(event) {
    event.preventDefault();
    const r = rnd(rgb);
    const g = rnd(rgb);
    const b = rnd(rgb);
    console.log(r, g, b);
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
      newBookElement.style.background = `linear-gradient(90deg,rgba(${myLibrary[j].red},${myLibrary[j].green},${myLibrary[j].blue},.75),rgba(0,0,0,.75))`
      newBookElement.style.color = 'white';
      const removeBtn = document.createElement('button');
      removeBtn.style.backgroundColor = 'antiquewhite';
      removeBtn.style.border = 'none';
      removeBtn.classList.add('bookBtn');
        removeBtn.textContent = `remove`;
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(j, 1);
            populateLibrary();
        })
      bookRead.addEventListener('click', () => {
        console.log(myLibrary[j].read);
        myLibrary[j].toggleRead();
        populateLibrary();
      })
      bookRead.style.backgroundColor = 'antiquewhite';
      bookRead.style.border = 'none';
      bookRead.classList.add('bookBtn');
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('buttonContainer');
      buttonContainer.appendChild(bookRead);
      buttonContainer.appendChild(removeBtn);
      newBookElement.appendChild(buttonContainer);
      content.appendChild(newBookElement);
    }
}

function rnd(val) {
    return Math.floor(Math.random() * val);
}

addBookToLibrary('War and Peace', 'Leo Tolstoy', 500, 'Yes', 0, 150, 150, 150);
addBookToLibrary('Dragons of Summer Flame', 'Margaret Weis, Tracy Hickman', 789, 'No', 1, 150, 100, 12);
addBookToLibrary('Cryptoassets', 'Jack Tatar, Chris Burniske', 300, 'Yes', 2, 10, 255, 100);
addBookToLibrary('The Three-Body Problem', 'Cixin Liu', 325, 'Yes', 3, 33, 67, 2);
addBookToLibrary('This is an Extremely Long Book Title', 'Zhiguang Zhang', 500, 'No', 4, 50, 200, 255);
populateLibrary();