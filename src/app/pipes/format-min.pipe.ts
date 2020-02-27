import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMin'
})
export class FormatMinPipe implements PipeTransform {

  transform(value: any): any {
    const formatedMs = value / 1000 / 60;
    const cutMin = formatedMs.toString().slice(0, 4);
    const cleanMin = cutMin.split('.');
    return cleanMin[0] + ':' + cleanMin[1];
  }

}
