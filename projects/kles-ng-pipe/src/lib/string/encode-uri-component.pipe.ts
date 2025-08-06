import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString } from '../utils/utils';

@Pipe({
    name: 'encodeURIComponent',
    standalone: true
})
export class EncodeURIComponentPipe implements PipeTransform {
  transform(input: any) {
    if (!isString(input)) {
      return input;
    }

    return encodeURIComponent(input);
  }
}

@NgModule({
  imports: [EncodeURIComponentPipe],
  exports: [EncodeURIComponentPipe],
})
export class NgEncodeURIComponentPipeModule {}
