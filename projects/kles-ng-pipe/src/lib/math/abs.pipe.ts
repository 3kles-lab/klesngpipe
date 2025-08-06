import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isNumberFinite } from '../utils/utils';

@Pipe({
    name: 'abs',
    standalone: true
})
export class AbsPipe implements PipeTransform {
  transform(input: any): any {
    if (!isNumberFinite(input)) {
      return 'NaN';
    }

    return Math.abs(input);
  }
}

@NgModule({
  imports: [AbsPipe],
  exports: [AbsPipe],
})
export class NgAbsPipeModule {}
