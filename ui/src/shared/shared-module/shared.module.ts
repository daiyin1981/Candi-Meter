import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialComponentsModule} from 'src/shared/material-components-module/material-components.module'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  exports:[
    MaterialComponentsModule
  ]
})
export class SharedModule { }
