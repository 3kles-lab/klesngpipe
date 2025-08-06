import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isNil } from '../utils/utils';

@Pipe({
    name: 'isNil',
    standalone: true
})
export class IsNilPipe implements PipeTransform {
  transform(value: any): boolean {
    return isNil(value);
  }
}

@NgModule({
  imports: [IsNilPipe],
  exports: [IsNilPipe],
})
export class NgIsNilPipeModule {}
