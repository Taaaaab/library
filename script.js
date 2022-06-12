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

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'have read');
const book2 = new Book('Goosebumps XD', 'J.R.R.', '215 pages', 'have not read');
const book3 = new Book('LOTR', 'J.R.', '445 pages', 'have not read');

function addBookToLibrary(books) {
    books.push(book1);
    books.push(book2);
    books.push(book3);
};

addBookToLibrary(myLibrary);
console.log(myLibrary);

function displayLibrary(library) {
    library.forEach((book) => {
        card1.textContent = (library[0].title + " " + library[0].author + " " + library[0].pages + " " + library[0].read);
        card2.textContent = (library[1].title + " " + library[1].author + " " + library[1].pages + " " + library[1].read);
        card3.textContent = (library[2].title + " " + library[2].author + " " + library[2].pages + " " + library[2].read);
    });
}

displayLibrary(myLibrary);

// const btn = document.getElementById('newBook');
// btn.addEventListener('click', () => {
//     const form = document.getElementById('form');
//     if (form.style.display === 'none') {
//       form.style.display = 'block';
//     } else {
//       form.style.display = 'none';
//     }
//   });

