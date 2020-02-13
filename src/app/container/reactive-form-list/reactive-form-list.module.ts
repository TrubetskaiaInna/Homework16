import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormListComponent} from './reactive-form-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ReactiveFormListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormListComponent
  ]
})
export class ReactiveFormListModule {
}
