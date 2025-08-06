import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { shuffle } from '../utils/utils';

@Pipe({
    name: 'shuffle',
    standalone: true
})
export class ShufflePipe implements PipeTransform {
  transform(input: any): any {
    return shuffle(input);
  }
}

@NgModule({
  imports: [ShufflePipe],
  exports: [ShufflePipe],
})
export class NgShufflePipeModule {}
