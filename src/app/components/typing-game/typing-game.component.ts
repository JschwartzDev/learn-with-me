import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-typing-game',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './typing-game.component.html',
  styleUrl: './typing-game.component.css',
})
export class TypingGameComponent {}
