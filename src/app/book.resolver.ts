import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Book} from "./book";
import {BookService} from "./book.service";

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<Book | undefined> {

  constructor(private bookService: BookService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book | undefined> {
    const bookId = route.params['id'] as string;
    return this.bookService.findBook(Number(bookId));
  }
}
