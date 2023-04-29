import {Component} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent {

  constructor(private bookService: BookService) {
  }

  register(book: Book): void {
    this.bookService.save(book);
  }

  isInvalid(formControl: string) {

  }
}
