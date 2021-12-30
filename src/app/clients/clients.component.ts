import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">👨 Clients 👩</h1>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
