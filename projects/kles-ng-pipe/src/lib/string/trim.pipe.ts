import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString } from '../utils/utils';

@Pipe({
    name: 'trim',
    standalone: true
})
export class TrimPipe implements PipeTransform {
  transform(input: any): any {
    if (!isString(input)) {
      return input;
    }

    return input.trim();
  }
}

@NgModule({
  imports: [TrimPipe],
  exports: [TrimPipe],
})
export class NgTrimPipeModule {}
