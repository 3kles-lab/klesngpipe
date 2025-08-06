import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isUndefined } from '../utils/utils';

@Pipe({
    name: 'isUndefined',
    standalone: true
})
export class IsUndefinedPipe implements PipeTransform {
  transform(value: any): boolean {
    return isUndefined(value);
  }
}

@NgModule({
  imports: [IsUndefinedPipe],
  exports: [IsUndefinedPipe],
})
export class NgIsUndefinedPipeModule {}
