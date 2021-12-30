import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container ">
          <h1 class="title">
            🏠 Welcome to Code Alchemists
          </h1>
          <p>Code Alchemists is an independent software development company established in the Netherlands in 2020.</p>
          <p>Our goal is to apply our Software Development knowledge and experience to support small and mid-sized businesses.</p>
          <li>Java EE and SpringBoot are primarily used for backend solutions.</li>
          <li>Angular is used for providing most frontend solutions: including this website 😎</li>
        </div>
      </div>   
    </section>
  `,
  styles: [`
  .hero {
    background-image: url('/assets/img/Tux in the dark - lightbulb.jpg');
    background-size: auto auto;
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
