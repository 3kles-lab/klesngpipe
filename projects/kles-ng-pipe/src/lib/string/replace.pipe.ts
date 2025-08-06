import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString, isUndefined } from '../utils/utils';

@Pipe({
    name: 'replace',
    standalone: true
})
export class ReplacePipe implements PipeTransform {
  transform(input: any, pattern: any, replacement: any): any {
    if (!isString(input) || isUndefined(pattern) || isUndefined(replacement)) {
      return input;
    }

    return input.replace(pattern, replacement);
  }
}

@NgModule({
  imports: [ReplacePipe],
  exports: [ReplacePipe],
})
export class NgReplacePipeModule {}
