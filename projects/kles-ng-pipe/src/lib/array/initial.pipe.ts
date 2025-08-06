import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'initial',
    standalone: true
})
export class InitialPipe implements PipeTransform {
  transform(input: any): any {
    if (!isArray(input)) {
      return input;
    }

    return input.slice(0, input.length - 1);
  }
}

@NgModule({
  imports: [InitialPipe],
  exports: [InitialPipe],
})
export class NgInitialPipeModule {}
