import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddCharacterComponent } from './characters/add-character/add-character.component';
import { CharactersDetailComponent } from './characters/characters-detail/characters-detail.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'characters',component:CharactersComponent},
  {path:'characters/:id',component:CharactersDetailComponent},
  {path:'add',component:AddCharacterComponent},
  {path:'about',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
