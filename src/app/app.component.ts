import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-frontend';
  value = '';
  categories: any;
  errorMessage: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['name'];
    // });
    this.http.get<any>('http://localhost:8000/api/categories').subscribe({
      next: data => {
        this.categories = data;
        console.log(this.categories);
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
  }
}
