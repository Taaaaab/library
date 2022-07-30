const container = document.querySelector('#container');
const gridContainer = document.querySelector('#gridContainer');
let myLibrary = [];

class Book {
  constructor(title, author, length, status) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.status = status;

    Book.prototype.toggleStatus = function () {
      this.status = !this.status;
    }
  }
}
// const Book = function (title, author, length, status) {
//   const b = Object.create(bookProto);
//   return Object.assign(b, { title, author, length, status });
// };


function addBookToLibrary(book) {
    myLibrary.push(book);
};

// Hide form to create new book until button is clicked
const btn = document.getElementById('newBook');
btn.addEventListener('click', () => {
    const form = document.getElementById('myForm');
    if (form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  });
// Function to create new book object from user input
const addBook = (e)=> {
    e.preventDefault();
    const book = new Book(document.getElementById('title').value, 
    document.getElementById('author').value, 
    document.getElementById('pages').value, 
    document.getElementById('status').value);
    
    addBookToLibrary(book);
    console.log(myLibrary);
    document.forms[0].reset();
    let i = 1;
    const cardBox = document.createElement('div');
    cardBox.classList.add('card-box');
    const content = document.createElement('div');
    content.classList.add(`card${i}`);
    content.classList.add('card');
    content.textContent = ('Title: ' + book.title + '\n ' + 
    'Author: ' + book.author + '\n' + 
    'Pages: ' + book.length + '\n' + 
    'Read: ' + book.status);

    gridContainer.appendChild(cardBox);
    cardBox.appendChild(content);
    const readBtn = document.createElement('button');
    readBtn.classList.add('readBtn');
    readBtn.textContent = 'Read';
    cardBox.appendChild(readBtn);
    const deleteBook = document.createElement('button');
    deleteBook.classList.add('deleteBook');
    deleteBook.textContent = 'Remove';
    cardBox.appendChild(deleteBook);
    i++;
// Hide form after submitting
    const form = document.getElementById('myForm');
    if (form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
// Delete button 
  deleteBook.addEventListener('click', () => {
      cardBox.classList.add('card-box-delete');
    });
    console.log(book.status);
// Read button
       readBtn.addEventListener('click', () => {
        book.toggleStatus();
        console.log(book.status);
        content.textContent = ('Title: ' + book.title + '\n ' + 
        'Author: ' + book.author + '\n' + 
        'Pages: ' + book.length + '\n' + 
        'Read: ' + book.status);
});

}

document.addEventListener('DOMContentLoaded', ()=>{
    const submit = document.getElementById('submit');
    submit.addEventListener('click', addBook);
});







  


