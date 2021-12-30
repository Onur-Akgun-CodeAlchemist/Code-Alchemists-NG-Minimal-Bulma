import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>

    <!-- routes get injected here -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // https://www-codealchemists.com'
    this.http.get('https://api.github.com/users?per_page=5')
      .subscribe(data => {
        console.log(data); 
      });
  }
}
