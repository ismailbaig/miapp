import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {HomeModel} from '../models/home.model'

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private _jsonURL = '../../data/data.json';
    data: [{
        "name":"dosa",
          "foodImg": "./assets/dosa1.jpg",
          "description":"A very special Dosa with Tasty Chutney!!",
          "price": 25, 
          "quantity": 1
        }, 
        {
        "name":"idli",
          "foodImg": "./assets/idli.jpg",
          "description":"A very tasty Idli with Chutney & Sambar!!",
          "price": 20, 
          "quantity": 2
        },
        {
        "name":"vada",
          "foodImg": "./assets/vada.jpg",
          "description":"Delicious Vada with Chutney & Sambar!!",
          "price": 10, 
          "quantity": 3
        },
    
        {
        "name":"puri",
          "foodImg": "./assets/puri.jpg",
          "description":"Delicious puri with Chutney !!",
          "price": 15, 
          "quantity": 2
    }];

    constructor(private http: HttpClient){
       
    }

    getFoodDashboard(): HomeModel[] {
        //this.http.get(this._jsonURL).subscribe( res => this.data = res);
        return [{
            "name":"dosa",
              "foodImg": "./assets/dosa1.jpg",
              "description":"A very special Dosa with Tasty Chutney!!",
              "price": 25, 
              "quantity": 1
            }, 
            {
            "name":"idli",
              "foodImg": "./assets/idli.jpg",
              "description":"A very tasty Idli with Chutney & Sambar!!",
              "price": 20, 
              "quantity": 2
            },
            {
            "name":"vada",
              "foodImg": "./assets/vada.jpg",
              "description":"Delicious Vada with Chutney & Sambar!!",
              "price": 10, 
              "quantity": 3
            },
        
            {
            "name":"puri",
              "foodImg": "./assets/puri.jpg",
              "description":"Delicious puri with Chutney !!",
              "price": 15, 
              "quantity": 2
        }];;
    }
}

