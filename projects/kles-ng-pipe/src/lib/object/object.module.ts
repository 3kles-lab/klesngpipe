import { NgModule } from '@angular/core';

import { NgKeysPipeModule } from './keys.pipe';
import { NgToArrayPipeModule } from './to-array.pipe';
import { NgDefaultsPipeModule } from './defaults.pipe';
import { NgPropertyPipeModule } from './property.pipe';

@NgModule({
  imports: [NgKeysPipeModule, NgToArrayPipeModule, NgDefaultsPipeModule, NgPropertyPipeModule],
})
export class NgObjectPipesModule { }
