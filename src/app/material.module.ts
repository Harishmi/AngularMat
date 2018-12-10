import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  imports: [MatButtonModule, MatIconModule,MatToolbarModule,MatSidenavModule,MatFormFieldModule,MatInputModule],
  exports: [MatButtonModule, MatIconModule,MatToolbarModule,MatSidenavModule,MatFormFieldModule,MatInputModule],
})
export class MyOwnCustomMaterialModule { }
