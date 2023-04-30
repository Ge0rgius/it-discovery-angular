import {Component, SecurityContext} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent {

  bookForm: FormGroup;

  constructor(private bookService: BookService, formBuilder: FormBuilder,
              private sanitizer: DomSanitizer) {
    this.bookForm = formBuilder.group({
      title: formBuilder.control('', [Validators.required,
        Validators.minLength(4), Validators.maxLength(50),]),
      author: formBuilder.control('', [Validators.required,
        Validators.minLength(4), Validators.maxLength(50),
        this.validateAuthor])
    });
    this.bookForm.get('title')?.setAsyncValidators(this.validateTitleExistence.bind(this));
  }

  register(): void {
    const book = this.bookForm.value as Book;
    book.title = this.sanitizer.sanitize(SecurityContext.HTML, book.title || '') as string;
    this.bookService.save(book);
  }

  // isInvalid(formControl: NgModel): boolean | null {
  //   return formControl.dirty && !formControl.valid;
  // }

  isInvalid(formControl: string): boolean {
    const control = this.bookForm.get(formControl);
    return control!.dirty && !control!.valid;
  }

  validateAuthor(control: FormControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    if (control.value.toString().split(' ').length >= 2) {
      return null;
    }
    return {authorTooSmall: true};
  }

  validateTitleExistence(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.bookService.bookExists(control.value)
      .pipe(map(result => {
        if (!result) {
          return null;
        } else {
          return {titleExists: true};
        }
      }));
  }
}
