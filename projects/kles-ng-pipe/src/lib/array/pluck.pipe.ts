import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray, getProperty } from '../utils/utils';

@Pipe({
    name: 'pluck',
    standalone: true
})
export class PluckPipe implements PipeTransform {
  transform(input: any, key: string): any {
    if (!isArray(input) || !key) {
      return input;
    }

    return input.map((value: any) => {
      return getProperty(value, key);
    });
  }
}

@NgModule({
  imports: [PluckPipe],
  exports: [PluckPipe],
})
export class NgPluckPipeModule {}
