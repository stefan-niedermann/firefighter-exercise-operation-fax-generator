import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlEncode'
})
export class UrlEncodePipe implements PipeTransform {

  transform(value: undefined | string): string {
    return value === undefined
      ? ''
      : encodeURI(value);
  }

}
