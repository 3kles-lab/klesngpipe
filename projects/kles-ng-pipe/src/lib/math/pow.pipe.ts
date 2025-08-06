import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isNumberFinite } from '../utils/utils';

@Pipe({
    name: 'pow',
    standalone: true
})
export class PowPipe implements PipeTransform {
  transform(input: any, power: number = 2): any {
    if (!isNumberFinite(input)) {
      return 'NaN';
    }

    return Math.pow(input, power);
  }
}

@NgModule({
  imports: [PowPipe],
  exports: [PowPipe],
})
export class NgPowPipeModule {}
