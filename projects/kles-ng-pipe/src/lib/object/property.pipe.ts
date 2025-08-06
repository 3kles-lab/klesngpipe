import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isObject } from '../utils/utils';

@Pipe({
    name: 'property',
    standalone: true
})
export class PropertyPipe implements PipeTransform {

  transform(value: any, property: string): any {
    return (value[property]) ? value[property] : value;
  }
}

@NgModule({
  imports: [PropertyPipe],
  exports: [PropertyPipe],
})
export class NgPropertyPipeModule { }
