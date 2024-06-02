const myLibrary = []; // array where books are stored

function Book(name, author, read) { // constructor
    this.name = name;
    this.author = author;
    this.read = read;
}

function updateGrid(){

    for (var book of myLibrary) {
        // Create card
        const bookCard = document.createElement("div");
        bookCard.className = "bookCard";

        // Add title
        const bookName = document.createElement("h1");
        bookName.textContent = book.name;
        bookCard.appendChild(bookName);
    
        // Add author
        const bookAuth = document.createElement("h2");
        bookAuth.textContent = book.author;
        bookCard.appendChild(bookAuth);

        // Add card to grid
        document.getElementById("bookGrid").appendChild(bookCard);
    }

    

}

function addBook() {

    // Get values from form
    const name = document.getElementById("book");
    const author = document.getElementById("author");
    const read = document.getElementById("readPrev");

    const tempBook = new Book(name, author, read); 

    // Add constructor to array
    myLibrary.push(tempBook);
    updateGrid();
}

// Bind the action in JS - bad practice to use HTML
document.querySelector("#bookForm").addEventListener("submit", function(event){
    event.preventDefault();
    addBook();
});