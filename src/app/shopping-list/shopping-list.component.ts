import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  Ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatos", 10)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(ingredient: Ingredient){
    this.Ingredients.push(ingredient);
  }

}
