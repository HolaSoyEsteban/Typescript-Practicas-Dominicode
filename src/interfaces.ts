interface Book {
    id: number;
    title: string;
    author: string;
    coauthor?: string;
    isLoan?: (id: number) => void
}

const book: Book = {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
};

const books: Book[] = [];

function getBook(): Book {
    return {id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien'};
}

const myBook = getBook();

function createBook(book: Book): Book {
    return book;
}

const newBook: Book = {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    coauthor: 'Christopher Tolkien',
}

createBook(newBook);