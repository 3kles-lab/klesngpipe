import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'isArray',
    standalone: true
})
export class IsArrayPipe implements PipeTransform {
  transform(value: any): boolean {
    return isArray(value);
  }
}

@NgModule({
  imports: [IsArrayPipe],
  exports: [IsArrayPipe],
})
export class NgIsArrayPipeModule {}
