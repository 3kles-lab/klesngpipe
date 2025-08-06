import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'map',
    standalone: true
})
export class MapPipe implements PipeTransform {
  transform(input: any, fn: Function): any {
    if (!isArray(input) || !fn) {
      return input;
    }

    return input.map(fn);
  }
}

@NgModule({
  imports: [MapPipe],
  exports: [MapPipe],
})
export class NgMapPipeModule {}
