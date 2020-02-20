import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './container/page-not-found/page-not-found.component';
import {ReactiveFormListComponent} from './container/reactive-form-list/reactive-form-list.component';
import {TemplateDrivenFormComponent} from './container/template-driven-form-list/template-driven-form.component';

const routes: Routes = [
  {path: 'reactive', component: ReactiveFormListComponent},
  {path: 'template-driven', component: TemplateDrivenFormComponent},
  {path: '', redirectTo: '/reactive', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
