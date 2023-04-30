import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Book} from "../book";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent implements OnInit {

  // @Input()
  book?: Book;

  searchText?: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.book = this.route.snapshot.data['book'];
  }

}
