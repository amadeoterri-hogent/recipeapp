
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeComponent} from "./recipe/recipe.component";
import {IngredientComponent} from "./ingredient/ingredient.component";



@NgModule({
  declarations: [RecipeComponent,IngredientComponent],
  imports: [
    CommonModule
  ],
  exports:[RecipeComponent]
})
export class RecipeModule { }
