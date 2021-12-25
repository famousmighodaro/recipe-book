import {EventEmitter, Output } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[]= [
    new Recipe("Rosted Beef Burger", "toast the Burger for 5 minutes",
      "https://www.edeka.de/media/01-rezeptbilder/rezeptbilder-a-d/rez-edeka-burger-the-big-american-rezept-a-d-1-1.jpg"),
    new Recipe("Spaghetti Beloniza", "This is simply a test",
      "https://th.bing.com/th/id/OIP.Oeet4btEd80iYyDyUPIs-gHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7")
  ];

  getRecipes() {
    return this.recipes.slice(); // return a new copy of the recipe array and not a reference.
  }
}
