import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A pizza recipe', 'This is a simple margarita pizza','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQXJBVX7yq1JXXA7-uKCV7LxsQShngAlSFA&usqp=CAU'),
    new Recipe('An ice-cream recipe', 'This is vanila ice-cream','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQXJBVX7yq1JXXA7-uKCV7LxsQShngAlSFA&usqp=CAU'),
    new Recipe('A burger recipe', 'This is a delicious burger','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQXJBVX7yq1JXXA7-uKCV7LxsQShngAlSFA&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  };
  
  onRecipeSelected(recipe:Recipe){
   this.recipeWasSelected.emit(recipe)
  };

}
