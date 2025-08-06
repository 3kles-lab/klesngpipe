import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isNull } from '../utils/utils';

@Pipe({
    name: 'isNull',
    standalone: true
})
export class IsNullPipe implements PipeTransform {
  transform(value: any): boolean {
    return isNull(value);
  }
}

@NgModule({
  imports: [IsNullPipe],
  exports: [IsNullPipe],
})
export class NgIsNullPipeModule {}
