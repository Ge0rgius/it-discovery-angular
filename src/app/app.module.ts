import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookComponent} from './book/book.component';
import {BooksComponent} from './books/books.component';
import {BookService} from "./book.service";
import {QuotePipe} from './quote.pipe';
import {BookRegistrationComponent} from './book-registration/book-registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HighlightDirective} from './highlight.directive';
import {BookDetailsComponent} from './book-details/book-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorHandlerInterceptor} from "./error-handler.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    QuotePipe,
    BookRegistrationComponent,
    HighlightDirective,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BookService, {
    provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
