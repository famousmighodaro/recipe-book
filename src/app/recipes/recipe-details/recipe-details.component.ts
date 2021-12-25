import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input()
  recipeSelected!: Recipe;
    show= "";
    togleState= false;
  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.togleState = !this.togleState
    if(this.togleState){
      this.show='show'
    } else {
      this.show='';
    }
  }

  onAddIngredientToShoppingList(){
    /*this.recipeSelected.ingredients.forEach(ingredient => {
      this.shoppingListService.addIngredient(ingredient);
    })*/
    this.recipeService.onAddIngredientToShoppingList(this.recipeSelected.ingredients);
  }
}
