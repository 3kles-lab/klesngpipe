import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isNumber } from '../utils/utils';

@Pipe({
    name: 'isNumber',
    standalone: true
})
export class IsNumberPipe implements PipeTransform {
  transform(value: any): boolean {
    return isNumber(value);
  }
}

@NgModule({
  imports: [IsNumberPipe],
  exports: [IsNumberPipe],
})
export class NgIsNumberPipeModule {}
