import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">📝 About</h1>
          <p>Why are we even called Code Alchemists?</p>
          <p>The motivation came from writing all sorts of "Code", such as Java and JavaScript</p>
          <p>Alchemy is an ancient science where the Alchemists experimented in their quest to turn lead into gold. </p>
          <p>Although they didn't succeed in turning lead into gold, they DID manage to make a lot of progress and pave the the way for modern sciences such as:</p>
          <li>Medicine</li>
          <li>Chemistry</li>

          <p>The focus on experiments was ultimately the motivating factor to call the company Code Alchemists</p>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}