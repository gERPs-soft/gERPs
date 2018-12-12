import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortIndex'
})
export class SortIndexPipe implements PipeTransform {

  transform(value: Array<any>, args: string): Array<any> {
    value = value || [];
    return value.sort((a, b) => {
      // if (a.assort_index.toLowerCase() > b.assort_index.toLowerCase()) {
      if (a[args] > b[args]) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
