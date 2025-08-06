import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString } from '../utils/utils';

@Pipe({
    name: 'decodeURI',
    standalone: true
})
export class DecodeURIPipe implements PipeTransform {
  transform(input: any) {
    if (!isString(input)) {
      return input;
    }

    return decodeURI(input);
  }
}

@NgModule({
  imports: [DecodeURIPipe],
  exports: [DecodeURIPipe],
})
export class NgDecodeURIPipeModule {}
