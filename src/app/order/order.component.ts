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
    _totalCost: number = 0;

    constructor(private router:Router, private route: ActivatedRoute, private appsrv: AppService){}

    ngOnInit(): void {
        // this._quantity = this.route.snapshot.paramMap.get('quantity');
        // this._itemName = this.route.snapshot.paramMap.get('itemname');
        //this._quantity = this.route.snapshot.params;
        //console.log("In Order component : " + this._quantity);

        this._items = this.appsrv.getFoodDashboard();

        for(let i of this._items){
            this._totalCost += i.price * i.quantity;
        }

        //this._items.forEach(x => this._totalCost + (x.quantity * x.price));
    }


    ConfrimOrder(){
        this.appsrv.sendEmail().subscribe(
            res => res ? this.router.navigateByUrl('/payment') : this.router.navigateByUrl('/err'),
            err => this.router.navigateByUrl('/err')
        );
        //this.router.navigate(['./payment']);
    }

    IsItemOrdered(itemqnty) : boolean{
        return itemqnty > 0;
    }

}