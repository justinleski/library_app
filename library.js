const myLibrary = []; // array where books are stored
let bookIndex = -1;

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

function updateGrid(){
    
    let lastBook = myLibrary.at(-1);

    // Create card
    const bookCard = document.createElement("div");
    bookCard.className = "bookCard";
    bookIndex += 1;
    bookCard.dataset.bookPos = bookIndex;

    // Add remove box
    const removeBox = document.createElement("div");
    removeBox.style.display = "flex";
    removeBox.style.justifyContent = "end";

    // Put button in box
    const remBtn = document.createElement("button");
    remBtn.innerHTML = "&times;";
    remBtn.className = "remBtn";
    remBtn.addEventListener("click", () => {

        // Remove indice in array and card
        const oldBook = bookCard.dataset.bookPos;
        bookCard.remove();

        // Rem indice
        const tempArray = myLibrary.splice(oldBook); // splice at data attribute value
        tempArray.shift(); // remove oldBook
        bookIndex -= 1;

         // Shift all indices of tempArray down 1
         tempArray.forEach((element) => element.index - 1);
        
         // Concat the library back together
         myLibrary = myLibrary.concat(tempArray);
        
    }); // Hook up function to button

    removeBox.appendChild(remBtn);
    bookCard.appendChild(removeBox);

    // Add title
    const bookName = document.createElement("h1");
    bookName.textContent = lastBook.name;
    bookCard.appendChild(bookName);

    // Add author
    const bookAuth = document.createElement("h2");
    bookAuth.textContent = lastBook.author;
    bookCard.appendChild(bookAuth);

    // Add card to grid
    document.getElementById("bookGrid").appendChild(bookCard);
    closeForm();
}


// Bind the action in JS - bad practice to use HTML
document.querySelector("#bookForm").addEventListener("submit", function(event){
    event.preventDefault(); // stops page from refreshing automatically
    addBook();
    updateGrid();
});

/*
OPEN AND CLOSE MODAL
*/
document.querySelector(".openModalBtn").addEventListener("click", () => {
    newForm();
});

document.querySelector(".closeModalBtn").addEventListener("click", () => {
    closeForm();
});

function newForm() {
    document.querySelector("#overlay").classList.add("active");
    document.querySelector("#bookForm").classList.add("active");
}

function closeForm() {
    document.querySelector("#overlay").classList.remove("active");
    document.querySelector("#bookForm").classList.remove("active");
}