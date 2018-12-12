import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortIndex'
})
export class SortIndexPipe implements PipeTransform {

  transform(value: Array<any>, args1?: string, args2?: boolean): Array<any> {
    value = value || [].reverse();
    return value.sort((a, b) => {

        if (args2 === true) {
          if (a[args1] > b[args1]) {
            return 1;
          } else {
            return -1;
          }
        } else {
          if (a[args1] > b[args1]) {
            return -1;
          } else {
            return 1;
          }
        }
      }
    )
      ;
  }

}
