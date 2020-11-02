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

function addBook(){
    if(isAllDataValid()){
        let book = getBook();
        displayBook(book);
    }
}

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
    // return book
    return book;
}

function displayBook(myBook:Book):void{
    // Display book below form
}


// ADD VALIDAITON CODE
function isAllDataValid(){
    return true;
}

