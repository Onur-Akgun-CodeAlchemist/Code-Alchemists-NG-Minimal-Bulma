import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">📧 Contact Us 📞</h1>
          <h2><a href="mailto:info@code-alchemists.com">📝Fill out a form or e-mail us directly 📧</a></h2>
          <h2>📱 Or give us a call ☎</h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">

      <!-- contact form -->
      <form (ngSubmit)="submitForm()" #contactForm="ngForm">

        <!-- name -->
        <div class="field">
          <label class="label">Name 🧑</label>
          <input 
            type="text" 
            name="name" 
            class="input" 
            [(ngModel)]="name" 
            #nameInput="ngModel"
            required
            placeholder="Your Name">
          
          <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">
            Your name is required.
          </div>
        </div>

        <!-- email -->
        <div class="field">
          <label class="label">E-mail 📧</label>
          <input 
            type="email" 
            name="email" 
            class="input" 
            [(ngModel)]="email" 
            #emailInput="ngModel"
            required
            placeholder="Your E-mail">

          <div class="help is-error"  *ngIf="emailInput.invalid && emailInput.touched">
            Your e-mail is required.
          </div>
        </div>

        <!-- message -->
        <div class="field">
          <label class="label">Your Message ✍</label>
          <textarea 
            name="message"
            class="textarea"
            placeholder="How can we help?"></textarea>
        </div>

        <!-- submit button -->
        <button 
          type="submit" 
          class="button is-large is-link"
          [disabled]="contactForm.invalid">
            Send 📧
        </button>

      </form>

      </div>
    </section>
`,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm() {

    const message = `Your message has been sent. We will get in touch with:\n\n ${this.name}\n ${this.email}\n\n`;
    const thanks = `Thank you for your inquiry.\n`;
    alert(message + thanks);
  }

}
