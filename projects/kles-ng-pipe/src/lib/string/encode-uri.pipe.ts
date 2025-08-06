import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString } from '../utils/utils';

@Pipe({
    name: 'encodeURI',
    standalone: true
})
export class EncodeURIPipe implements PipeTransform {
  transform(input: any) {
    if (!isString(input)) {
      return input;
    }

    return encodeURI(input);
  }
}

@NgModule({
  imports: [EncodeURIPipe],
  exports: [EncodeURIPipe],
})
export class NgEncodeURIPipeModule {}
