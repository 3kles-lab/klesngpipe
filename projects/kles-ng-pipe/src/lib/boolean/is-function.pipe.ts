import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isFunction } from '../utils/utils';

@Pipe({
    name: 'isFunction',
    standalone: true
})
export class IsFunctionPipe implements PipeTransform {
  transform(value: any): boolean {
    return isFunction(value);
  }
}

@NgModule({
  imports: [IsFunctionPipe],
  exports: [IsFunctionPipe],
})
export class NgIsFunctionPipeModule {}
