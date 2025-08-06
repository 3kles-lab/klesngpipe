import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { leftPad, isString } from '../utils/utils';

@Pipe({
    name: 'leftpad',
    standalone: true
})
export class LeftPadPipe implements PipeTransform {
  transform(input: any, length: number = 0, character: string = ' '): any {
    if (!isString(input)) {
      return input;
    }

    return leftPad(input, length, character);
  }
}

@NgModule({
  imports: [LeftPadPipe],
  exports: [LeftPadPipe],
})
export class NgLeftPadPipeModule {}
