import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {Dashboard} from "./components/dashboard/dashboard";
import {Tables} from "./components/tables/tables";
import {ServerListService} from "./services/server_list";
import {UserListService} from "./services/user_list";
import {RdWidget} from "./components/rd-widget/rd-widget";
import {RdWidgetBody} from "./components/rd-widget-body/rd-widget-body";
import {RdWidgetHeader} from "./components/rd-widget-header/rd-widget-header";
import {RdWidgetFooter} from "./components/rd-widget-footer/rd-widget-footer";
import {RdLoading} from "./components/rd-loading/rd-loading";
import {ServerListView} from "./components/server-list-view/server-list-view";
import {UserListView} from "./components/user-list-view/user-list-view";
import {Alerts} from "./components/alerts/alerts";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Dashboard},
  {path: 'tables', component: Tables}
];

@NgModule({
  declarations: [
    AppComponent,
    Dashboard,
    Tables,
    Alerts,
    RdWidget,
    RdWidgetBody,
    RdWidgetHeader,
    RdWidgetFooter,
    RdLoading,
    ServerListView,
    UserListView
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [UserListService, ServerListService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {
}
