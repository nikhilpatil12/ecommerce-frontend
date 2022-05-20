import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { elementAt } from 'rxjs';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categories: any;
  checkboxes: any;
  errorMessage: any;
  prices: string[]=["Any","$0 - $20","$20 - $50","$50 - $100","$100 - $500",">$500"];
  pricefilter: any;
  products: any;
  headers:any;
  params:any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<any>('https://ecommerce-ns.herokuapp.com/api/categories').subscribe({
    next: data => {
      this.categories = data;
      console.log(this.categories);
      this.checkboxes = new Array(data.length).fill(false);
    },
    error: error => {
      this.errorMessage = error.message;
      console.error('There was an error!', error);
    }
  });

  this.http.get<any>('https://ecommerce-ns.herokuapp.com/api/products?sortBy=&order=desc&limit=8').subscribe({
    next: data => {
      this.products = data;
      console.log(this.products);
    },
    error: error => {
      this.errorMessage = error.message;
      console.error('There was an error!', error);
    }
  });
  
  // this.headers = new Headers();
  // this.headers.append('Accept',  "application/json",);
  // this.headers.append('Content-Type', 'application/json');
  // this.params = new HttpParams().set("paramName",paramValue).set("paramName2", paramValue2); //Create new HttpParams

  // this.http.post('http://localhost:8000/api/products/by/search', { headers: this.headers, body: this.params }).subscribe({
  //   next: data => {
  //     this.products = data;
  //     console.log(this.products);
  //   },
  //   error: error => {
  //     this.errorMessage = error.message;
  //     console.error('There was an error!', error);
  //   }
  // })

  }

}

function getFilters(){

}

