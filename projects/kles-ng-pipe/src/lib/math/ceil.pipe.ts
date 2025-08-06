import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { createRound, isString } from '../utils/utils';

@Pipe({
    name: 'ceil',
    standalone: true
})
export class CeilPipe implements PipeTransform {
  transform(value: any, precision: any = 0): any {
    if (isString(precision)) {
      precision = parseInt(precision);
    }

    return createRound('ceil')(value, precision);
  }
}

@NgModule({
  imports: [CeilPipe],
  exports: [CeilPipe],
})
export class NgCeilPipeModule {}
