import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BabnyNavComponent } from './babny/babny-nav/babny-nav.component';
import { BabnyHomeComponent } from './babny/babny-home/babny-home.component';
import { BabnyFooterComponent } from './babny/babny-footer/babny-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    BabnyNavComponent,
    BabnyHomeComponent,
    BabnyFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
