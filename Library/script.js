const myLibrary = [];

function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

Book.prototype.getPrintable = function() {
    return `Name: ${this.name}(${this.pages}), Author: ${this.author}`;
}

function addBookToLibrary(name, author, pages) {
    let newBook = new Book(name, author, pages);
    myLibrary.push(newBook);
}

function displayBooks(library) {


    let libraryDiv = document.querySelector('#library');
    libraryDiv.innerHTML = '';
    for(let book of library) {


        let bookDiv = document.createElement('div');
        let bookName = document.createElement('p');
        let bookAuthor = document.createElement('p');
        let bookPages = document.createElement('p')
        
        bookName.innerText = book.name;
        bookAuthor.innerText = book.author;
        bookPages.innerText = book.pages;
        
        bookDiv.appendChild(bookName);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        
        bookDiv.className = 'book';
        
        libraryDiv.appendChild(bookDiv);
    }
}

let showAddBookDialog = document.querySelector('#showAddBookDialog');
let dialog = document.querySelector('#dialog');
let addBookBtn = document.querySelector('#addBookBtn');

showAddBookDialog.addEventListener('click', () => {
    dialog.showModal();
});

addBookBtn.addEventListener('click', () => {
    let name = dialog.querySelector('#name').value;
    let author = dialog.querySelector('#author').value;
    let pages = dialog.querySelector('#pages').value;
   
    console.log(`${name}, ${author}, ${pages}`);
    addBookToLibrary(name, author, pages);
    displayBooks(myLibrary);
})

displayBooks(myLibrary);