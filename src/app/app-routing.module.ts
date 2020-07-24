import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';

const routes : Routes = [
    { path:'', redirectTo:'home', pathMatch:"prefix"},
    {path:'home', component: HomeComponent},
    // {path:'orders/:quantity/:itemname/:idliqnty/:idliname', component: OrderComponent},
    {path: 'order', component: OrderComponent},
    {path:'payment', component: PaymentComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }