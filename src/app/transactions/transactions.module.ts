import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';

@NgModule({
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ],
  declarations: [
TransactionsComponent
  ]
})
export class TransactionsModule { }
