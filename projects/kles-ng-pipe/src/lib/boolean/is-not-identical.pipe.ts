import { PipeTransform, Pipe, NgModule } from '@angular/core';

@Pipe({
    name: 'notIdentical',
    standalone: true
})
export class IsNotIdenticalPipe implements PipeTransform {
  transform(first: any, second: any): boolean {
    return first !== second;
  }
}

@NgModule({
  imports: [IsNotIdenticalPipe],
  exports: [IsNotIdenticalPipe],
})
export class NgIsNotIdenticalPipeModule {}
