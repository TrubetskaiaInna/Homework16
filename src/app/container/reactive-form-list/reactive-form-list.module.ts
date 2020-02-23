import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormListComponent} from './reactive-form-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormListRoutingModule} from './reactive-form-list.routing.module';

@NgModule({
  declarations: [
    ReactiveFormListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormListRoutingModule
  ],
  exports: [
    ReactiveFormListComponent
  ]
})
export class ReactiveFormListModule {
}
