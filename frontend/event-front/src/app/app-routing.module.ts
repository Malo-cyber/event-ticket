import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventBuyComponent } from './event-buy/event-buy.component';
import { EventListComponent } from './event-list/event-list.component';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';

const routes: Routes = [
    { path: 'event-list', component: EventListComponent },
    { path: 'checkout', component: OrderCheckoutComponent},
    { path: 'ticket-buy/:id', component: EventBuyComponent}
];

@NgModule({
    imports:[
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {}