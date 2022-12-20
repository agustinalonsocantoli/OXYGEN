import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectorComponent } from './components/selector/selector.component';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { ColorCompactModule } from 'ngx-color/compact';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ColorCompactModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
