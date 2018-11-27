import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformPrice'
})
export class TransformPricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + args;
  }

}
