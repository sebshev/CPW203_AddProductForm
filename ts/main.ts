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

function getByID(id:string){
    return document.getElementById(id)
}

/**
 * Clears all errors in validation summary
 */
function clearAllErrors(){
    let errSummary = getByID('validation-summary');
    errSummary.innerText = "";
}
/**
 * 
 */
function addBook(){
    clearAllErrors();
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

function getInputById(id:string):HTMLInputElement {
    return <HTMLInputElement>document.getElementById(id);
}
// ADD VALIDAITON CODE
function isAllDataValid(){
    let isValid = true;

    let title = getInputById("title").value;
    if(title == ""){
        isValid = false;
        addErrorMessage("Title is required!");
    }

    let author = getInputById("author").value;
    if(author == ""){
        isValid = false;
        addErrorMessage("Author is required!");
    }

    let genre = (<HTMLOptionElement>getByID("genre")).value
    if(genre == "") {
        isValid = false;
        addErrorMessage("Choose a Genre!");
    }
    return isValid;
}

function addErrorMessage(errMsg:string) {
    let errSummary = getByID("validation-summary");
    let errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}

