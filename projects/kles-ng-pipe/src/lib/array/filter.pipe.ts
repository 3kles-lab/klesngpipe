import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  public transform(items: any[], searchText: string, key: string): any {
    if (searchText == null || items == null) {
      return items;
    }
    return items.filter(item => item[key].toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
}

@NgModule({
  declarations: [FilterPipe],
  exports: [FilterPipe],
})
export class NgFilterPipeModule { }
