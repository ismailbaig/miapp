import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {HomeModel} from '../models/home.model'

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private _jsonURL = '../../data/data.json';
    data: HomeModel[] = [{
        "name":"dosa",
          "foodImg": "./assets/dosa1.jpg",
          "description":"A very special Dosa with Tasty Chutney!!",
          "price": 25, 
          "quantity": 0
        }, 
        {
        "name":"idli",
          "foodImg": "./assets/idli.jpg",
          "description":"A very tasty Idli with Chutney & Sambar!!",
          "price": 20, 
          "quantity": 0
        },
        {
        "name":"vada",
          "foodImg": "./assets/vada.jpg",
          "description":"Delicious Vada with Chutney & Sambar!!",
          "price": 10, 
          "quantity": 0
        },
    
        {
        "name":"puri",
          "foodImg": "./assets/puri.jpg",
          "description":"Delicious puri with Chutney !!",
          "price": 15, 
          "quantity": 0
    }];

    constructor(private http: HttpClient){}

    addFoodOrder(order: HomeModel[]) {
      this.data = order;
    }

    getFoodDashboard(): HomeModel[] {
        //this.http.get(this._jsonURL).subscribe( res => this.data = res);
        return this.data;
    }
}

