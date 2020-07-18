import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items: any = [
    {
      name: 'dosa',
      foodImg: '../assets/dosa1.jpg',
      description:'A special Dosa with Tasty Chutney!!',
      price: 25, 
      quantity: 1
    }, 
    {
      name: 'idli',
      foodImg: '../assets/idli.jpg',
      description:'A very tasty Idli with Chutney & Sambar!!',
      price: 20, 
      quantity: 2
    },
    {
      name: 'vada',
      foodImg: '../assets/vada.jpg',
      description:'Delicious Vada with Chutney & Sambar!!',
      price: 10, 
      quantity: 3
    },

    {
      name: 'puri',
      foodImg: '../assets/puri.jpg',
      description:'Delicious puri with Chutney !!',
      price: 15, 
      quantity: 2
    },
  ]

  constructor(private router: Router ){}

  buy(){
    console.log("In Home component : " + this.items.quantity);
    //this.router.navigate(['/orders/', {data: this.items.quantity}]);
    //this.router.navigateByUrl('/orders/quantity='+ this.items.quantity);
    this.router.navigateByUrl('/orders/'+this.items[0].quantity+'/'+this.items.name
    +'/'+this.items[1].quantity+'/'+this.items[1].name);
  }
}
