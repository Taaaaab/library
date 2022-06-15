const container = document.querySelector('#container');
const gridContainer = document.querySelector('#gridContainer');
const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return(title + " by " + author + ", " + pages + ", " + read)
    }
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'Yes');
const book2 = new Book('Goosebumps XD', 'J.R.R.', '215', 'No');
const book3 = new Book('LOTR', 'J.R.', '445', 'No');

function addBookToLibrary(book) {
    myLibrary.push(book);
};

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

function displayLibrary(library) {
    library.forEach((book) => {
        card1.textContent = ('Title: ' + library[0].title+'\n'
        + 'Author: ' + library[0].author + '\n' 
        + 'Pages: ' + library[0].pages + '\n'
        + 'Have Read?: ' + library[0].read);
        card2.textContent = (('Title: ' + library[1].title + '\n') +
        ('Author: ' + library[1].author + '\n') +
        ('Pages: ' + library[1].pages + '\n') + 
        ('Read?: ' + library[1].read));
        card3.textContent = (('Title: ' + library[2].title + '\n') +
        ('Author: ' + library[2].author + '\n') +
        ('Pages: ' + library[2].pages + '\n') + 
        ('Read?: ' + library[2].read));
    });
}

displayLibrary(myLibrary);

const btn = document.getElementById('newBook');
btn.addEventListener('click', () => {
    const form = document.getElementById('myForm');
    if (form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  });

let i = 4

const addBook = (e)=>{
    e.preventDefault();
    const book = new Book(document.getElementById('title').value, 
    document.getElementById('author').value, 
    document.getElementById('pages').value, 
    document.getElementById('yes').value)

    addBookToLibrary(book);
    console.log(myLibrary);
    document.forms[0].reset();
    const cardBox = document.createElement('div');
    cardBox.classList.add('card-box');
    const content = document.createElement('div');
    content.classList.add(`card${i}`);
    i+1;
    content.textContent = ('Title: ' + book.title + '\n ' + 
    'Author: ' + book.author + '\n' + 
    'Pages: ' + book.pages + '\n' + 
    'Read: ' + book.read);

    gridContainer.appendChild(cardBox);
    cardBox.appendChild(content);
    const deleteBook = document.createElement('button');
    deleteBook.classList.add('deleteBook');
    deleteBook.textContent = 'Remove';
    cardBox.appendChild(deleteBook);
}

document.addEventListener('DOMContentLoaded', ()=>{
    const submit = document.getElementById('submit');
    submit.addEventListener('click', addBook);

});




