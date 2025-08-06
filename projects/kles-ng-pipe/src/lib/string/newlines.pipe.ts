import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString } from '../utils/utils';

@Pipe({
    name: 'newlines',
    standalone: true
})
export class NewlinesPipe implements PipeTransform {
  transform(input: any): any {
    if (!isString(input)) {
      return input;
    }

    return input.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }
}

@NgModule({
  imports: [NewlinesPipe],
  exports: [NewlinesPipe],
})
export class NgNewlinesPipeModule {}
