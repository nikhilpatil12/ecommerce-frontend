import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;
  productssold: any;
  errorMessage: any;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['name'];
    // });
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
    this.http.get<any>('https://ecommerce-ns.herokuapp.com/api/products?sortBy=sold&order=desc&limit=8').subscribe({
      next: data => {
        this.productssold = data;
        console.log(this.productssold);
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
    
  }

}
