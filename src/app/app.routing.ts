import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./home.component";

const APP_ROUTS: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: 'app/recipes/recipe.module#RecipesModule' },
  { path: 'shopping-list', component: ShoppingListComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTS);
