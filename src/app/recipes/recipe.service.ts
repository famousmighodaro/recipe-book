import {EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[]= [
    new Recipe("Rosted Beef Burger", "toast the Burger for 5 minutes",
      "https://www.edeka.de/media/01-rezeptbilder/rezeptbilder-a-d/rez-edeka-burger-the-big-american-rezept-a-d-1-1.jpg",
      [new Ingredient("Beef", 3), new Ingredient("bread", 2)]),
    new Recipe("Spaghetti Beloniza", "This is simply a test",
      "https://th.bing.com/th/id/OIP.Oeet4btEd80iYyDyUPIs-gHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
      [new Ingredient("Spaghetti", 1), new Ingredient("Tomatos", 4)])
  ];
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // return a new copy of the recipe array and not a reference.
  }

  onAddIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
