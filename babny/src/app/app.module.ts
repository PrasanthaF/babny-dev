import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BabnyNavComponent } from './babny/babny-nav/babny-nav.component';
import { BabnyHomeComponent } from './babny/babny-home/babny-home.component';
import { BabnyFooterComponent } from './babny/babny-footer/babny-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MenuModule, PanelModule, ChartModule  } from 'primeng/primeng';
import { BabnySideMenuComponent } from './babny/babny-side-menu/babny-side-menu.component';
import { BabnyChartPieComponent } from './babny/babny-chart-pie/babny-chart-pie.component';

@NgModule({
  declarations: [
    AppComponent,
    BabnyNavComponent,
    BabnyHomeComponent,
    BabnyFooterComponent,
    BabnySideMenuComponent,
    BabnyChartPieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    PanelModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
