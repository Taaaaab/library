const container = document.querySelector('#container');
const gridContainer = document.querySelector('#gridContainer');
const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');

let myLibrary = [];
// Object Constructor to create book object
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return(title + " by " + author + ", " + pages + ", " + read)
    }
}
// Example book objects to fill grid
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'Yes');
const book2 = new Book('Book 2', 'Author 2', '345', 'No');
const book3 = new Book('Book 3', 'Author 3', '445', 'No');

function addBookToLibrary(book) {
    myLibrary.push(book);
};

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
console.log(myLibrary);
// Add books to library array & display them on cards
function displayLibrary(library) {  
    library.forEach((obj) => {
        let i = 0;
        card1.textContent = ('Title: ' + library[i].title + '\n' + 
        'Author: ' + library[i].author + '\n' + 
        'Pages: ' + library[i].pages + '\n' + 
        'Have Read?: ' + library[i].read);
        console.log(obj);
        i++;
        console.log(i);
        card2.textContent = ('Title: ' + library[i].title + '\n' + 
        'Author: ' + library[i].author + '\n' + 
        'Pages: ' + library[i].pages + '\n' + 
        'Have Read?: ' + library[i].read);
        i++;
        card3.textContent = ('Title: ' + library[i].title + '\n' +
        'Author: ' + library[i].author + '\n' +
        'Pages: ' + library[i].pages + '\n' + 
        'Have Read?: ' + library[i].read);
        i++;
    });
}

displayLibrary(myLibrary);
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
    document.getElementById('yes').value)
    
    addBookToLibrary(book);
    console.log(myLibrary);
    document.forms[0].reset();
    let i = 4;
    const cardBox = document.createElement('div');
    cardBox.classList.add('card-box');
    const content = document.createElement('div');
    content.classList.add(`card${i}`);
    content.classList.add('card');
    content.textContent = ('Title: ' + book.title + '\n ' + 
    'Author: ' + book.author + '\n' + 
    'Pages: ' + book.pages + '\n' + 
    'Read: ' + book.read);

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
}

document.addEventListener('DOMContentLoaded', ()=>{
    const submit = document.getElementById('submit');
    submit.addEventListener('click', addBook);
});

const cardBox1 = document.getElementById('cardBox1');
const cardBox2 = document.getElementById('cardBox2');
const cardBox3 = document.getElementById('cardBox3');

const deleteBook1 = document.getElementById('deleteBook1');
deleteBook1.addEventListener('click', () => {
    cardBox1.classList.add('card-box-delete');
  });
const deleteBook2 = document.getElementById('deleteBook2');
deleteBook2.addEventListener('click', () => {
    cardBox2.classList.add('card-box-delete');
});
const deleteBook3 = document.getElementById('deleteBook3');
deleteBook3.addEventListener('click', () => {
    cardBox3.classList.add('card-box-delete');
  });
  


