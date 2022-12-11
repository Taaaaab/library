// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
// // Follow this pattern to import other Firebase services
// // import { } from 'firebase/<service>';

// const firebaseConfig = {
//   apiKey: "AIzaSyArIQrEPVHg_NRlU0U_ir1XSPw42pH5ppM",
//   authDomain: "library-d58dc.firebaseapp.com",
//   projectId: "library-d58dc",
//   storageBucket: "library-d58dc.appspot.com",
//   messagingSenderId: "1067687580111",
//   appId: "1:1067687580111:web:cffb1a845276a6ace5c2ba"
// };

// const app = initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);

// const db = getFirestore();
// const colRef = collection(db, 'books')

// // get collection data
// getDocs(colRef)
//   .then((snapshot) => {
//     let books = []
//     snapshot.docs.forEach((doc) => {
//       books.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(books)
//   })
//   .catch(err => {
//     console.log(err.message)
//   })


const gridContainer = document.querySelector('#gridContainer');
let myLibrary = [];

// book object 
const Book = function (title, author, length, status) {
  const b = Object.create(bookProto);
  return Object.assign(b, { title, author, length, status });
};
// using prototype to change read status
const bookProto = {
  toggleStatus() {
    this.status = !this.status;
  }
};
// adding book to myLibrary array
function addBookToLibrary(book) {
    myLibrary.push(book);
};

const addBookForm = document.querySelector('.add');
const myForm = document.getElementById('myForm');

// hide form to create new book until button is clicked
const newBookBtn = document.querySelector('.newBookBtn');
newBookBtn.addEventListener('click', () => {
    if (myForm.style.display === 'none') {
      myForm.style.display = 'block';
    } else {
      myForm.style.display = 'none';
    }
  });

// function to create new book object from user input
const addBook = (e) => {
    e.preventDefault();
    const book = new Book(addBookForm.title.value, 
    addBookForm.author.value, 
    addBookForm.pages.value, 
    addBookForm.status.value);
    // add book element to array
    addBookToLibrary(book);
    // console.log(myLibrary);
    
    // add book to firebase using addDoc function
    addDoc(colRef, {
      title: addBookForm.title.value,
      author: addBookForm.author.value,
      pages: addBookForm.pages.value,
      status: addBookForm.status.value,
    })
    // reset form
    .then(() => {
      addBookForm.reset()
    })
    
    // add DOM element for book
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
// hide form after submitting
    let form = document.getElementById('myForm');
    if (form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }

// add delete button 
  deleteBook.addEventListener('click', () => {
      cardBox.classList.add('card-box-delete');
    });
    console.log(book.status);

// add read button
  readBtn.addEventListener('click', () => {
    book.toggleStatus();
    console.log(book.status);
    content.textContent = ('Title: ' + book.title + '\n ' + 
    'Author: ' + book.author + '\n' + 
    'Pages: ' + book.length + '\n' + 
    'Read: ' + book.status);
  });

}

const title = document.getElementById('title');
const errorElement = document.getElementById('error');
const submitBtn = document.getElementById('submitBtn');

addBookForm.addEventListener('submit', (e) => {
  let messages = [];
  if (title.value === '' || title.value == null) {
    messages.push('Book title is required');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }

});

document.addEventListener('DOMContentLoaded', ()=> {
  submitBtn.addEventListener('click', addBook);
});






  

