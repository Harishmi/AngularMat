import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatIconModule,MatMenuModule,MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule,MatIconModule,MatMenuModule,MatToolbarModule],
})
export class MyOwnCustomMaterialModule { }