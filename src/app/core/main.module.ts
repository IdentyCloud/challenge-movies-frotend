import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MainComponent,
    RouterModule.forChild([
      { path: '', component: MainComponent },
    ]),
  ]
})
export class MainModule { }