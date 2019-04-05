import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketwatchComponent } from './marketwatch/marketwatch.component';
import { HoldingsComponent } from './holdings/holdings.component';
import { FundsComponent } from './funds/funds.component';

const routes: Routes = [
{ path: 'marketwatch', component: MarketwatchComponent },
{ path: 'holdings',      component: HoldingsComponent },
{ path: 'funds',      component: FundsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
