import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {NewsComponent} from "./news/news/news.component";

const routes: Routes = [{
  path: 'books', component: BooksComponent
},
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'news', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
