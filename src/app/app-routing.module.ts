import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HiraganaComponent } from './hiragana/hiragana.component';
import { KatakanaComponent } from './katakana/katakana.component';
 
  //routes  
  const routes: Routes = [
      {path:'hiragana', component: HiraganaComponent},
      {path: 'katakana', component: KatakanaComponent }
  ]; 


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}