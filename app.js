const myLibrary = [];

function Book(title,author,pages,read){
this.title=title;
this.author=author;
this.pages=pages;
this.read=read;
let didRead = '';
  this.info = function(){
  if(read)
  { didRead = "read"
  }
  else{
    didRead = "not read"
  }
    return `${title} by ${author}, ${numPages} pages, ${didRead}`;
  }
}

function addBookToLibrary(title,author,pages,read){
const book = new Book(title,author,pages,read);
myLibrary.push(book);
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

newBookButton.addEventListener("click", ()=>{
    sidebar.appendChild(newBook);
})

newBook.onsubmit = function(event){
    event.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    newBook.title.value = "";
    newBook.author.value = "";
    newBook.pages.value = "";
    sidebar.removeChild(newBook);
    populateLibrary();
}

function populateLibrary(){
for (Book in myLibrary)
{
    const newBookElement = document.createElement('div');
    newBookElement.textContent = Book.title;
    newBookElement.classList.add('book');
    content.appendChild(newBookElement);
}
}