import { data } from "./data.mjs"

const getBooks = () => {
  return data;
}

const getBook = (id) => {
  return data.find((d) => d.id === id);
}

// Destructuring
const book = getBook(2);
const title = book.title;

console.log(book);
console.log(title);

