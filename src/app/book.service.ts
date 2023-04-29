import {Injectable} from '@angular/core';
import {Book} from "./book";

@Injectable()
export class BookService {

  books: Book[];

  constructor() {
    this.books = [{
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford', pages: 172, year: 2008, price: 200,
      description:
        ' This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable'
    }, {
      title: 'Mastering TypeScript',
      author: 'Nathan Rozentals',
      description: 'Build enterprise-ready, industrial strength web applications using TypeScript and leading JavaScript frameworks',
      year: 2015,
      pages: 364,
      price: 300
    }, {
      title: 'Switching to Angular 2',
      author: 'Minko Gechev',
      description: 'Start using TypeScript to supercharge your Angular 2 applications',
      year: 2016,
      pages: 254,
      price: 400
    }];
  }

  getBooks(): Book[] {
    return this.books;
  }

  save(book: Book): void {
    this.books.push(book);
  }
}
