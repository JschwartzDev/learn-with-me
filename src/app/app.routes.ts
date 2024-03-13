import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TypingGameComponent } from './components/typing-game/typing-game.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'typing-game', component: TypingGameComponent },
];
