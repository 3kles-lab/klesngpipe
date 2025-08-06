import { PipeTransform, Pipe, NgModule } from '@angular/core';

@Pipe({
    name: 'greaterOrEqual',
    standalone: true
})
export class IsGreaterOrEqualPipe implements PipeTransform {
  transform(first: any, second: any): boolean {
    return first >= second;
  }
}

@NgModule({
  imports: [IsGreaterOrEqualPipe],
  exports: [IsGreaterOrEqualPipe],
})
export class NgIsGreaterOrEqualPipeModule {}
