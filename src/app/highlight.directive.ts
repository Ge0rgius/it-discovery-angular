import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  @Input()
  highlightColor?: string;

  @Input()
  highlightText?: string | undefined;

  @Input()
  originalHTML?: string | undefined;

  constructor(private el: ElementRef) {
  }

  highlight(): void {
    if (!this.highlightText) {
      this.el.nativeElement.innerHTML = this.originalHTML;
      return;
    }

    const regExp = new RegExp(`${this.highlightText}`, 'gi');
    this.el.nativeElement.innerHTML = this.originalHTML?.replace(regExp,
      `<span style="background-color: ${this.highlightColor}">${this.highlightText}</span>`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.highlight();
  }

}
