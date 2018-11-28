import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../products/products.component';

@Pipe({
  name: 'sortIndex'
})
export class SortIndexPipe implements PipeTransform {

  transform(value: Array<Product>, args: string = 'name'): Array<Product> {
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
