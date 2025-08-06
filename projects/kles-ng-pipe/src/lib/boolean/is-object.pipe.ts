import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isObject } from '../utils/utils';

@Pipe({
    name: 'isObject',
    standalone: true
})
export class IsObjectPipe implements PipeTransform {
  transform(value: any): boolean {
    return isObject(value);
  }
}

@NgModule({
  imports: [IsObjectPipe],
  exports: [IsObjectPipe],
})
export class NgIsObjectPipeModule {}
