import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'noise', loadChildren: './noise/noise.module#NoisePageModule' },
  { path: 'music', loadChildren: './music/music.module#MusicPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
