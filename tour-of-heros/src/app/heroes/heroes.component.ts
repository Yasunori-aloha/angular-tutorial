import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, HeroDetailComponent, RouterModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
