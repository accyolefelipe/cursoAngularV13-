import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCompComponent } from './test-comp/test-comp.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';



@NgModule({
  declarations: [
    TestCompComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestCompComponent,
    InputComponent,
    OutputComponent
  ]
})
export class SharedModule { }
