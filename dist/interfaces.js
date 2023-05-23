"use strict";
const book = {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
};
const books = [];
function getBook() {
    return { id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' };
}
const myBook = getBook();
function createBook(book) {
    return book;
}
const newBook = {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    coauthor: 'Christopher Tolkien',
};
createBook(newBook);
