import {RouterModule, Routes} from '@angular/router';
import {TemplateDrivenFormComponent} from './template-driven-form.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TemplateDrivenFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenFormRoutingModule {
}

