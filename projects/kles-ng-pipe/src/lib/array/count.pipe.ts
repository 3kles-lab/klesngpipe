import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { count } from '../utils/utils';

@Pipe({
    name: 'count',
    standalone: true
})
export class CountPipe implements PipeTransform {
  transform(input: any): any {
    return count(input);
  }
}

@NgModule({
  imports: [CountPipe],
  exports: [CountPipe],
})
export class NgCountPipeModule {}
