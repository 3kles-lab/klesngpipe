import { PipeTransform, Pipe, NgModule } from '@angular/core';

@Pipe({
    name: 'identical',
    standalone: true
})
export class IsIdenticalPipe implements PipeTransform {
  transform(first: any, second: any): boolean {
    return first === second;
  }
}

@NgModule({
  imports: [IsIdenticalPipe],
  exports: [IsIdenticalPipe],
})
export class NgIsIdenticalPipeModule {}
