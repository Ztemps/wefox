import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'no_image'
})

export class NoimagePipe implements PipeTransform {

  transform(value: string) {
    const noImagePath = '../../assets/img/picture-not-available.jpg';
    if (value === '') {
      return noImagePath;
    } else {
      return value;
    }
  }

}
