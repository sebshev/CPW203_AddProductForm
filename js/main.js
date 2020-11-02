var Book = (function () {
    function Book() {
    }
    return Book;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addBook;
};
function addBook() {
    if (isAllDataValid()) {
        var book = getBook();
        displayBook(book);
    }
}
function getBook() {
    var book = new Book();
    var titleInput = document.getElementById("title");
    book.title = titleInput.value;
    var authorInput = document.getElementById("author");
    book.author = authorInput.value;
    var genreInput = document.getElementById("genre");
    book.genre = genreInput.value;
    return book;
}
function displayBook(myBook) {
    var displayDiv = document.getElementById("display");
    var bookHeading = document.createElement("h3");
    bookHeading.innerText = myBook.title;
    var bookInfo = document.createElement("p");
    bookInfo.innerText = "Author: " + myBook.author + ", Genre: " + myBook.genre;
    displayDiv.appendChild(bookHeading);
    displayDiv.appendChild(bookInfo);
}
function isAllDataValid() {
    return true;
}
