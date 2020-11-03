import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) { }

  transform(value: any, format?: string): any {
    if (!value) {
      return '';
    }
    format = format || 'short';
    return value && typeof value === 'object' ? this.datePipe.transform(value, format) : '';
  }
}

@NgModule({
  declarations: [DateFormatPipe],
  exports: [DateFormatPipe],
})
export class DateFormatPipeModule { }
