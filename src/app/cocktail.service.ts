import { Injectable } from '@angular/core';
import { Coktail } from './cocktail';




@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktail1:Coktail = new Coktail("nom1",10, "image1");
  cocktail2:Coktail = new Coktail("nom2",100, "image2");
  cocktail3:Coktail = new Coktail("nom3",20, "image3");
  cocktail4:Coktail = new Coktail("nom4",150, "image4");
  cocktails:Coktail[] = 
  [this.cocktail1, this.cocktail2, this.cocktail3, this.cocktail3, this.cocktail4];
  constructor() { }

  getCocktails():Coktail[]{
    return this.cocktails;
  }
}
