// idea from https://github.com/a8m/angular-filter

import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString, isUndefined } from '../utils/utils';

@Pipe({
    name: 'wrap',
    standalone: true
})
export class WrapPipe implements PipeTransform {
  transform(input: string, wrap: string, ends?: string): string {
    return isString(input) && !isUndefined(wrap) ? [wrap, input, ends || wrap].join('') : input;
  }
}

@NgModule({
  imports: [WrapPipe],
  exports: [WrapPipe],
})
export class NgWrapPipeModule {}
