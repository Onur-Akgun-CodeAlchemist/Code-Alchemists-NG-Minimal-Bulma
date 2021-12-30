import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-dark">
      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="assets/img/Code Alchemists Logo.png">
        </a>
      </div>

      <!-- menu -->
      <div class="navbar-menu ">
        <div class="navbar-start">
          <a class="navbar-item" routerLink="/">🏠 Home</a>
          <a class="navbar-item" routerLink="/about">📝 About</a>
          <a class="navbar-item" routerLink="/services">💻 Services</a>
          <a class="navbar-item" routerLink="/clients"> 👨🤝👩 Clients</a>
          <a class="navbar-item" routerLink="/contact">📧 Contact 📞</a>

          <a href="https://github.com/Onur-Akgun-CodeAlchemist/https---github.com-Onur-Akgun-CodeAlchemist-Code-Alchemists-NG-Minimal">
            <img style="position: fixed; top: 0; right: 0; border: 0;"
              src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" 
              alt="Fork me on GitHub" max-width="100%" width="auto" height="">
          </a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
