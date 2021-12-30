import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: OurServicesComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'users',
    loadChildren: 'app/users/users.module#UsersModule'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
