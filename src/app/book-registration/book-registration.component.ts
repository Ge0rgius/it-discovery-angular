import {Component} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent {

  book = new Book();

  constructor(private bookService: BookService) {
  }

  register(): void {
    this.bookService.save(this.book);
  }

  isInvalid(formControl: NgModel): boolean | null {
    return formControl.dirty && !formControl.valid;
  }
}
