import { PipeTransform, Pipe, NgModule } from '@angular/core';

@Pipe({
    name: 'lessOrEqual',
    standalone: true
})
export class IsLessOrEqualPipe implements PipeTransform {
  transform(first: any, second: any): boolean {
    return first <= second;
  }
}

@NgModule({
  imports: [IsLessOrEqualPipe],
  exports: [IsLessOrEqualPipe],
})
export class NgIsLessOrEqualPipeModule {}
