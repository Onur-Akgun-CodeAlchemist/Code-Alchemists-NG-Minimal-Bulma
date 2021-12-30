import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container content has-text-centered">
        <a href="https://www.code-alchemists.com">
          <img src="assets/img/Code Alchemists Mission.jpg" height="50%" width="50%">
        </a>
        <p>Chamber of Commerce Number: 80406424 :Kamer van Koophandel Nummer</p>       
      </div>
    </footer>
  `,
  styles: [
    
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
