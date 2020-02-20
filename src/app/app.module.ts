import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundModule} from './container/page-not-found/page-not-found.module';
import {ReactiveFormListModule} from './container/reactive-form-list/reactive-form-list.module';
import {TemplateDrivenFormModule} from './container/template-driven-form-list/template-driven-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageNotFoundModule,
    ReactiveFormListModule,
    TemplateDrivenFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
