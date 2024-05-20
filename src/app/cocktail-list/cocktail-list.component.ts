import { Component, inject } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { NgFor } from '@angular/common';
import { Coktail } from '../cocktail';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {
  private cocktailService = inject(CocktailService);

  cocktails:Coktail[] = this.cocktailService.getCocktails();



}
