import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items: any = { name: 'dosa', quantity: 0 };

  constructor(private router: Router ){}

  buy(){
    console.log(this.items.quantity);
    this.router.navigate(['/orders', {data: this.items.quantity}]);
  }
}
