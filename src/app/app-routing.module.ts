import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutBobComponent } from './about/about-bob/about-bob.component';
import { AboutSusanComponent } from './about/about-susan/about-susan.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about',
    component: AboutComponent,
    children:[{path: "about-bob",component: AboutBobComponent},

  {path: "about-susan", component:AboutSusanComponent}]},
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
