import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { RecipesComponent } from "./recipes.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesItemComponent } from "./recipes-list/recipes-item.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipe-start.component";
import { recipeRouting } from "./recipe.routing";
import { RecipeService } from "./recipe.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeStartComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    recipeRouting,
  ],
  providers: [RecipeService]
})
export class RecipesModule {}
