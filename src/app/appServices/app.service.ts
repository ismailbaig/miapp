import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private _jsonURL = '../../data/data.json';
    data: any;

    constructor(private http: HttpClient){
       
    }

    getFoodDashboard(): Observable<any> {
        this.http.get(this._jsonURL).subscribe( res => this.data = res);
        return this.data;
    }
}