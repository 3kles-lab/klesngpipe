import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString } from '../utils/utils';

@Pipe({
    name: 'reverseStr',
    standalone: true
})
export class ReverseStrPipe implements PipeTransform {
  transform(input: string): string {
    if (!isString(input)) {
      return input;
    }

    return Array.from(input)
      .reverse()
      .join('');
  }
}

@NgModule({
  imports: [ReverseStrPipe],
  exports: [ReverseStrPipe],
})
export class NgReverseStrPipeModule {}
