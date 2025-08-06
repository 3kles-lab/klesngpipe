import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isNumberFinite } from '../utils/utils';

@Pipe({
    name: 'radians',
    standalone: true
})
export class RadiansPipe implements PipeTransform {
  transform(input: any): any {
    if (!isNumberFinite(input)) {
      return 'NaN';
    }

    return (input * Math.PI) / 180;
  }
}

@NgModule({
  imports: [RadiansPipe],
  exports: [RadiansPipe],
})
export class NgRadiansPipeModule {}
