import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './container/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () => import('./container/reactive-form-list/reactive-form-list.module')
      .then(module => module.ReactiveFormListModule)
  },
  {
    path: 'template-driven',
    loadChildren: () => import('./container/template-driven-form-list/template-driven-form.module')
      .then(module => module.TemplateDrivenFormModule)
  },
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
