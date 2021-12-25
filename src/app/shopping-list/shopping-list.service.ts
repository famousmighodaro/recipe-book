import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatos", 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  addIngredients (ingredients: Ingredient[]) {
    /*ingredients.forEach(ingredient => {
      this.addIngredient(ingredient);  // this will emit too much invent when adding many element in an array
    })*/

    this.ingredients.push(...ingredients); // this is a spread operator that is used to save an array list as if it was not an array.
    this.ingredientChanged.emit(this.ingredients.slice());

  }
}
