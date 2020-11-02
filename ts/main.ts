class Book{
    title:string;
    author:string;
    genre:string;

}

//test code
/*
let myBook = new Book();
myBook.author = "Stephen King";
myBook.title = "IT"
myBook.genre = "Fiction"
*/

window.onload = function(){
    let addBtn = 
        <HTMLElement>document.querySelector("input[type=button]")
    addBtn.onclick = addBook;
}

/**
 * 
 */
function addBook(){
    if(isAllDataValid()){
        let book = getBook();
        displayBook(book);
    }
}

/**
 * Gets data from the HTML form and returns it 
 * withn an object
 */
function getBook():Book{
    // create book
    let book = new Book();

    // put data from form 
    let titleInput = <HTMLInputElement>document.getElementById("title");
    book.title = titleInput.value;

    let authorInput = <HTMLInputElement>document.getElementById("author");
    book.author = authorInput.value;
    
    let genreInput = <HTMLSelectElement>document.getElementById("genre");
    book.genre = genreInput.value;

    return book;
}

/**
 * Displays book on HTML page
 */
function displayBook(myBook:Book):void{
    let displayDiv = document.getElementById("display");

    // Create h3 with book title
    let bookHeading = document.createElement("h3");
    bookHeading.innerText = myBook.title;

    // Creat p with book info
    let bookInfo = document.createElement("p");
    bookInfo.innerText = "Author: " + myBook.author + ", Genre: " + myBook.genre;

    // add h3 in the <div id=display>

    displayDiv.appendChild(bookHeading);
    displayDiv.appendChild(bookInfo);
}


// ADD VALIDAITON CODE
function isAllDataValid(){
    return true;
}

