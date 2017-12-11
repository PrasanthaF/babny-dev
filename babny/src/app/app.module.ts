import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BabnyNavComponent } from './babny/babny-nav/babny-nav.component';
import { BabnyHomeComponent } from './babny/babny-home/babny-home.component';
import { BabnyFooterComponent } from './babny/babny-footer/babny-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MenuModule, PanelModule, ChartModule, InputTextModule, ButtonModule, InputMaskModule, InputTextareaModule  } from 'primeng/primeng';
import { BabnySideMenuComponent } from './babny/babny-side-menu/babny-side-menu.component';
import { BabnyChartPieComponent } from './babny/babny-chart-pie/babny-chart-pie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BabnyAddNameComponent } from './babny/babny-name/babny-add-name.component';
import { BabnyFielderrorsComponent } from './babny/babny-fielderrors/babny-fielderrors.component';

@NgModule({
  declarations: [
    AppComponent,
    BabnyNavComponent,
    BabnyHomeComponent,
    BabnyFooterComponent,
    BabnySideMenuComponent,
    BabnyChartPieComponent,
    BabnyAddNameComponent,
    BabnyFielderrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    PanelModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
