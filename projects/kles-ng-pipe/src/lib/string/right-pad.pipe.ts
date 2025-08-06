import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { rightPad, isString } from '../utils/utils';

@Pipe({
    name: 'rightpad',
    standalone: true
})
export class RightPadPipe implements PipeTransform {
  transform(input: any, length: number = 0, character: string = ' '): any {
    if (!isString(input)) {
      return input;
    }

    return rightPad(input, length, character);
  }
}

@NgModule({
  imports: [RightPadPipe],
  exports: [RightPadPipe],
})
export class NgRightPadPipeModule {}
