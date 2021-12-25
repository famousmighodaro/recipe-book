import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output()
  ingredient= new EventEmitter<Ingredient>();
  @ViewChild('amountInput')
  amountInputRef!: ElementRef;
  constructor() { }


  ngOnInit(): void {
   
  }
  onAddIngredient(name: any){
      this.ingredient.emit(new Ingredient(name.value, this.amountInputRef.nativeElement.value))
  }

}
