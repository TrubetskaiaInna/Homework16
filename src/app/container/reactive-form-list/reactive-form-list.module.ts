import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormListComponent} from './reactive-form-list.component';

@NgModule({
  declarations: [
    ReactiveFormListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormListComponent
  ]
})
export class ReactiveFormListModule {
}
