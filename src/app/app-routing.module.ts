import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {NewsComponent} from "./news/news/news.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {BookResolver} from "./book.resolver";

const routes: Routes = [{
  path: 'books', component: BooksComponent
},
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'news', component: NewsComponent},
  {path: 'books/:id', component: BookDetailsComponent, resolve: {book: BookResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
