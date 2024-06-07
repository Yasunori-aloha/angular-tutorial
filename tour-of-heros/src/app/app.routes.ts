import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashbord', pathMatch: 'full' },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];
