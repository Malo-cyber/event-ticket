import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventListComponent } from './event-list/event-list.component';
import { HeaderComponent } from './header/header.component';
import { InterceptorInterceptor } from './interceptor.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EventBuyComponent } from './event-buy/event-buy.component';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';
import { ParticipantArrayComponent } from './shared/participant-array/participant-array.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    EventListComponent,
    HeaderComponent,
    EventBuyComponent,
    OrderCheckoutComponent,
    ParticipantArrayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
