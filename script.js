const container = document.querySelector('#container');
const bookCard = document.querySelector('#bookCard');
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

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'have read');
const book2 = new Book('Goosebumps XD', 'J.R.R.', '215 pages', 'have not read');
const book3 = new Book('LOTR', 'J.R.', '445 pages', 'have not read');

const ourLibrary = {
    book1,
    book2,
    book3
};

function addBookToLibrary(books) {
    for (let book in books) {
        myLibrary.push(book);
        card1.textContent = `${myLibrary[0]}`;
        card2.textContent = `${myLibrary[1]}`;
        card3.textContent = `${myLibrary[2]}`;
    };
};

addBookToLibrary(ourLibrary);
console.log(myLibrary);
