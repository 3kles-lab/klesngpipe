import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray, takeWhile, CollectionPredicate, isNil } from '../utils/utils';

@Pipe({
    name: 'takeWhile',
    standalone: true
})
export class TakeWhilePipe implements PipeTransform {
  transform(input: any, predicate?: CollectionPredicate): any {
    if (!isArray(input) || isNil(predicate)) {
      return input;
    }

    return takeWhile(input, predicate);
  }
}

@NgModule({
  imports: [TakeWhilePipe],
  exports: [TakeWhilePipe],
})
export class NgTakeWhilePipeModule {}
