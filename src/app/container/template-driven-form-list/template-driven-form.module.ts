import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TemplateDrivenFormComponent} from './template-driven-form.component';

@NgModule({
  declarations: [
    TemplateDrivenFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TemplateDrivenFormComponent]
})
export class TemplateDrivenFormModule {
}
