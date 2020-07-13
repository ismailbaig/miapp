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

    _quantity: string;
    _itemName: string;
    
    constructor(private router:Router, private route: ActivatedRoute){}

    ngOnInit(): void {
        this._quantity = this.route.snapshot.paramMap.get('quantity');
        this._itemName = this.route.snapshot.paramMap.get('itemname');
        //this._quantity = this.route.snapshot.params;
        console.log("In Order component : " + this._quantity);
    }


    next(){

        this.router.navigate(['./payment']);
    }

}