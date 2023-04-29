import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'quote'
})
export class QuotePipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): string | undefined {
    return `"${value}"`;
  }

}
