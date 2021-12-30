import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">💻 Services</h1>
          <li>Frontend development</li>
          <li>Backend development</li>
          <li>Software maintenance</li>
          <li>Software Quality</li>
          <br>
          <p>More services to come soon!</p>
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