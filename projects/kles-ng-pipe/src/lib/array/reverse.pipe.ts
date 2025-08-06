import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'reverse',
    standalone: true
})
export class ReversePipe implements PipeTransform {
  transform(input: any): any {
    if (!isArray(input)) {
      return input;
    }

    return [...input].reverse();
  }
}

@NgModule({
  imports: [ReversePipe],
  exports: [ReversePipe],
})
export class NgReversePipeModule {}
