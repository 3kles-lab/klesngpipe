import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isNumberFinite } from '../utils/utils';

@Pipe({
    name: 'degrees',
    standalone: true
})
export class DegreesPipe implements PipeTransform {
  transform(input: any): any {
    if (!isNumberFinite(input)) {
      return 'NaN';
    }

    return (input * 180) / Math.PI;
  }
}

@NgModule({
  imports: [DegreesPipe],
  exports: [DegreesPipe],
})
export class NgDegreesPipeModule {}
