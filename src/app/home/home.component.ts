import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../appServices/app.service';
import * as data from "../../data/data.json";
import {HomeModel} from '../models/home.model'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: HomeModel[];

  constructor(private router: Router, private appSrv: AppService ){}

  ngOnInit(): void {
    // console.log(data.default);
    // this.items = data.default  
    //this.appSrv.getFoodDashboard().subscribe(res => this.items = res);
    this.items = this.appSrv.getFoodDashboard();
  }

  buy(){
    //console.log("In Home component : " + this.items.quantity);
    //this.router.navigate(['/orders/', {data: this.items.quantity}]);
    //this.router.navigateByUrl('/orders/quantity='+ this.items.quantity);
    
    // this.router.navigateByUrl('/orders/'+this.items[0].quantity+'/'+this.items.name
    // +'/'+this.items[1].quantity+'/'+this.items[1].name);
  }
}
