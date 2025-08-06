import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString, upperFirst } from '../utils/utils';

@Pipe({
    name: 'upperfirst',
    standalone: true
})
export class UpperFirstPipe implements PipeTransform {
  transform(input: any): any {
    if (!isString(input)) {
      return input;
    }

    return upperFirst(input);
  }
}

@NgModule({
  imports: [UpperFirstPipe],
  exports: [UpperFirstPipe],
})
export class NgUpperFirstPipeModule {}
