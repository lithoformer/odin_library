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

const newBookButton = document.querySelector(".newBookBtn");

newBookButton.addEventListener("click", ()=>{
    sidebar.appendChild(newBook);
})

newBook.onsubmit = function(){
    sidebar.removeChild(newBook);
}