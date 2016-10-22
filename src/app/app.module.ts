import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { routing } from "./app.routing";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { CoreModule } from "./core.module";
import { RecipeService } from "./recipes/recipe.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ShoppingListModule,
    CoreModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
