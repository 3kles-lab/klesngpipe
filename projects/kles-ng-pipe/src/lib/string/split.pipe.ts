import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString } from '../utils/utils';

@Pipe({
    name: 'split',
    standalone: true
})
export class SplitPipe implements PipeTransform {
  transform(input: any, separator: string = ' ', limit?: number): any {
    if (!isString(input)) {
      return input;
    }

    return input.split(separator, limit);
  }
}

@NgModule({
  imports: [SplitPipe],
  exports: [SplitPipe],
})
export class NgSplitPipeModule {}
