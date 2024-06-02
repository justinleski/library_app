const myLibrary = []; // array where books are stored

// Bind the action in JS - bad practice to use HTML

document.querySelector("#bookForm").addEventListener("submit", addBook);
console.log("Hello 2");

function Book(name, author, read) { // constructor
    this.name = name;
    this.author = author;
    this.read = read;
}

function addBook() {

    console.log("Hello works");

    // !!! we need to use constructor to make new book
    let tempBook = document.getElementById("bookForm");
    tempBook.addEventListener("submit", function(event){
        event.preventDefault(); // prevents default browser behaviour like pg refresh


        //new Book(tempBook); // FormData() is also useful

        // USEFUL: https://www.youtube.com/watch?v=7LGpIQ6ceJs
    });

    // Add constructor to array
    //myLibrary.push(tempBook);
}

