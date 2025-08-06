import { PipeTransform, Pipe, NgModule } from '@angular/core';

@Pipe({
    name: 'notEqual',
    standalone: true
})
export class IsNotEqualPipe implements PipeTransform {
  transform(first: any, second: any): boolean {
    return first != second;
  }
}

@NgModule({
  imports: [IsNotEqualPipe],
  exports: [IsNotEqualPipe],
})
export class NgIsNotEqualPipeModule {}
