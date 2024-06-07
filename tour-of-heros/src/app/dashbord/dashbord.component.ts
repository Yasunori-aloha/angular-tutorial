import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css',
})
export class DashbordComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
