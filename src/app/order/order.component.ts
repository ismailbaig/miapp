import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit{

    _data: Number;
    constructor(private router:Router, private route: ActivatedRoute){}

    ngOnInit(): void {
        let _data = this.route.snapshot.paramMap.get('data');
        console.log(this._data);
    }


    next(){

        this.router.navigate(['./payment']);
    }

}