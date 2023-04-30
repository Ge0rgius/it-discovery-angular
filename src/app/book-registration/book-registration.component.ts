import {Component} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent {

  bookForm: FormGroup;

  constructor(private bookService: BookService, formBuilder: FormBuilder) {
    this.bookForm = formBuilder.group({
      title: formBuilder.control('', [Validators.required,
        Validators.minLength(4), Validators.maxLength(50)]),
      author: formBuilder.control('', [Validators.required,
        Validators.minLength(4), Validators.maxLength(50)])
    });
  }

  register(): void {
    const book = this.bookForm.value as Book;
    this.bookService.save(book);
  }

  // isInvalid(formControl: NgModel): boolean | null {
  //   return formControl.dirty && !formControl.valid;
  // }

  isInvalid(formControl: string): boolean {
    const control = this.bookForm.get(formControl);
    return control!.dirty && !control!.valid;
  }
}
