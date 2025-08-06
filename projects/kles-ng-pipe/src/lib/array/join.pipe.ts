import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'join',
    standalone: true
})
export class JoinPipe implements PipeTransform {
  transform(input: any, character: string = ''): any {
    if (!isArray(input)) {
      return input;
    }

    return input.join(character);
  }
}

@NgModule({
  imports: [JoinPipe],
  exports: [JoinPipe],
})
export class NgJoinPipeModule {}
