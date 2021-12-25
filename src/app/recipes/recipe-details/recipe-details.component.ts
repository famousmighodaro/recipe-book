import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

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
  constructor() { }

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

}
