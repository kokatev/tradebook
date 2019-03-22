import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MarketwatchComponent } from './marketwatch/marketwatch.component';
import { HoldingsComponent } from './holdings/holdings.component';
import { FundsComponent } from './funds/funds.component';
import { ScriptRowComponent } from './marketwatch/script-row/script-row.component';
import { WatchlistRowComponent } from './marketwatch/watchlist-row/watchlist-row.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MarketwatchComponent,
    HoldingsComponent,
    FundsComponent,
    ScriptRowComponent,
    WatchlistRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
