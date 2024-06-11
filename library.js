const myLibrary = []; // array where books are stored

function Book(name, author, read) { // constructor
    this.name = name;
    this.author = author;
    this.read = read;
}

function addBook() {

    // Get values from form
    const newName = document.getElementById("book").value; // added '.value' to each query selector. Otherwise it just takes the while HTML tag
    const newAuthor = document.getElementById("author").value;
    const newRead = document.getElementById("readPrev").value;

    // Add constructor to array
    myLibrary.push(new Book(newName, newAuthor, newRead)); // Make copy and push to array
    document.getElementById("bookForm").reset(); 
    
}

function remBook() {
    // class of "container" is bookCard
    // We need to somehow link
}

function updateGrid(){

    // myLibrary.forEach(function (item){
    //     console.log(item);
    // });

    let lastBook = myLibrary.at(-1);
    console.log("Last Book is"+lastBook.name);

    // Create card
    const bookCard = document.createElement("div");
    bookCard.className = "bookCard";

    // Add title
    const bookName = document.createElement("h1");
    bookName.textContent = lastBook.name;
    bookCard.appendChild(bookName);

    // Add author
    const bookAuth = document.createElement("h2");
    bookAuth.textContent = lastBook.author;
    bookCard.appendChild(bookAuth);

    // Add remove box
    const removeBox = document.createElement("div");
    removeBox.style.display = "flex";
    removeBox.style.justifyContent = "end";

    // Put button in box
    const remBtn = document.createElement("button");
    remBtn.innerHTML = "&times;";
    remBtn.className = "remBtn";
    

    removeBox.appendChild(remBtn);
    bookCard.appendChild(removeBox);

    // Add card to grid
    document.getElementById("bookGrid").appendChild(bookCard);
    
}


// Bind the action in JS - bad practice to use HTML
document.querySelector("#bookForm").addEventListener("submit", function(event){
    event.preventDefault(); // stops page from refreshing automatically
    addBook();
    updateGrid();
});

document.querySelector(".openModalBtn").addEventListener("click", () => {
    const modal = document.querySelector(button.openModalBtn);
    openModal(modal);
});