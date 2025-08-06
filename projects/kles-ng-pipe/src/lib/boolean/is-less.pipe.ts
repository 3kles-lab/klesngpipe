import { PipeTransform, Pipe, NgModule } from '@angular/core';

@Pipe({
    name: 'less',
    standalone: true
})
export class IsLessPipe implements PipeTransform {
  transform(first: any, second: any): boolean {
    return first < second;
  }
}

@NgModule({
  imports: [IsLessPipe],
  exports: [IsLessPipe],
})
export class NgIsLessPipeModule {}
