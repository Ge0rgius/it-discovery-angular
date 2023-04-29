import {Component} from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books: Book[];

  constructor() {
    this.books = [{
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford', pages: 172, year: 2008,
      description:
        ' This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable'
    }, {
      title: 'Mastering TypeScript',
      author: 'Nathan Rozentals',
      description: 'Build enterprise-ready, industrial strength web applications using TypeScript and leading JavaScript frameworks',
      year: 2015,
      pages: 364
    }, {
      title: 'Switching to Angular 2',
      author: 'Minko Gechev',
      description: 'Start using TypeScript to supercharge your Angular 2 applications',
      year: 2016,
      pages: 2544
    }];
  }
}
