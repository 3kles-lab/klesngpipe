import { PipeTransform, Pipe, NgModule } from '@angular/core';

@Pipe({
    name: 'greater',
    standalone: true
})
export class IsGreaterPipe implements PipeTransform {
  transform(first: any, second: any): boolean {
    return first > second;
  }
}

@NgModule({
  imports: [IsGreaterPipe],
  exports: [IsGreaterPipe],
})
export class NgIsGreaterPipeModule {}
