import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isObject } from '../utils/utils';

@Pipe({
    name: 'keys',
    standalone: true
})
export class KeysPipe implements PipeTransform {
  transform(input: any): any {
    if (!isObject(input)) {
      return input;
    }

    return Object.keys(input);
  }
}

@NgModule({
  imports: [KeysPipe],
  exports: [KeysPipe],
})
export class NgKeysPipeModule {}
