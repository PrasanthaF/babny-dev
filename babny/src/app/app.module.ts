import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BabnyNavComponent } from './babny/babny-nav/babny-nav.component';
import { BabnyHomeComponent } from './babny/babny-home/babny-home.component';
import { BabnyFooterComponent } from './babny/babny-footer/babny-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MenuModule, PanelModule, ChartModule, InputTextModule, ButtonModule,
  InputMaskModule, InputTextareaModule, EditorModule, CalendarModule, RadioButtonModule, FieldsetModule,
  DropdownModule, MultiSelectModule, ListboxModule, SliderModule, RatingModule, DataTableModule, TabViewModule, TabMenuModule, MenuItem
} from 'primeng/primeng';
import { BabnySideMenuComponent } from './babny/babny-side-menu/babny-side-menu.component';
import { BabnyChartPieComponent } from './babny/babny-chart-pie/babny-chart-pie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BabnyAddNameComponent } from './babny/babny-name/babny-add-name.component';
import { BabnyFielderrorsComponent } from './babny/babny-fielderrors/babny-fielderrors.component';
import { BabnySliderComponent } from './babny/widgets/babny-slider/babny-slider.component';
import { BabnyNameGridComponent } from './babny/widgets/babny-name-grid/babny-name-grid.component';
import { BabnyMainTabMenuComponent } from './babny/babny-menu/babny-main-tab-menu/babny-main-tab-menu.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: "welcome", component: BabnyHomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: "babyname", component: BabnyAddNameComponent },
  { path: "chart", component: BabnyChartPieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BabnyNavComponent,
    BabnyHomeComponent,
    BabnyFooterComponent,
    BabnySideMenuComponent,
    BabnyChartPieComponent,
    BabnyAddNameComponent,
    BabnyFielderrorsComponent,
    BabnySliderComponent,
    BabnyNameGridComponent,
    BabnyMainTabMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    PanelModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SliderModule,
    RatingModule,
    DataTableModule,
    TabViewModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
