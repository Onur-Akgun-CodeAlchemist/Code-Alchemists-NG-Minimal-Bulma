import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">💻 Services</h1>
          <p>Frontend development</p>
          <p>Backend development</p>
          <p>Software maintenance</p>
          <p></p>
          <p>more services to com soon!</p>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class OurServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}