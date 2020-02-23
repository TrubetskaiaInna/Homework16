import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormListComponent} from './reactive-form-list.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormListRoutingModule {

}

