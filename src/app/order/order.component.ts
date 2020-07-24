import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../appServices/app.service';
import { HomeModel } from '../models/home.model';

export interface order {
    quantity: string;
}

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit{

    _items: HomeModel[];
    _totalCost: Number = 0;

    constructor(private router:Router, private route: ActivatedRoute, private appsrv: AppService){}

    ngOnInit(): void {
        // this._quantity = this.route.snapshot.paramMap.get('quantity');
        // this._itemName = this.route.snapshot.paramMap.get('itemname');
        //this._quantity = this.route.snapshot.params;
        //console.log("In Order component : " + this._quantity);

        this._items = this.appsrv.getFoodDashboard();

        this._items.forEach(x =>  (x.quantity * x.price))
    }


    next(){

        this.router.navigate(['./payment']);
    }

}