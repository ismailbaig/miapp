import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

export interface order {
    quantity: string;
}

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit{

    _quantity: order;
    constructor(private router:Router, private route: ActivatedRoute){}

    ngOnInit(): void {
        // _data = this.route.snapshot.paramMap.get('data');
        this._quantity = <order>this.route.snapshot.params;
        console.log("In Order component : " + this._quantity.quantity);
    }


    next(){

        this.router.navigate(['./payment']);
    }

}