import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A pizza recipe', 'This is a simple margarita pizza','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQXJBVX7yq1JXXA7-uKCV7LxsQShngAlSFA&usqp=CAU'),
    new Recipe('A pizza recipe', 'This is a simple margarita pizza','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQXJBVX7yq1JXXA7-uKCV7LxsQShngAlSFA&usqp=CAU'),
    new Recipe('A pizza recipe', 'This is a simple margarita pizza','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQXJBVX7yq1JXXA7-uKCV7LxsQShngAlSFA&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
