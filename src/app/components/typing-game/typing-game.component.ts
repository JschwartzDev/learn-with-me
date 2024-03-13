import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NavigationComponent } from '../navigation/navigation.component';

const sightWords = [
  'a',
  'an',
  'at',
  'are',
  'as',
  'and',
  'all',
  'about',
  'after',
  'be',
  'by',
  'but',
  'been',
  'can',
  'could',
  'called',
  'did',
  'down',
  'do',
  'each',
  'from',
  'first',
  'find',
  'for',
  'he',
  'his',
  'had',
  'how',
  'has',
  'her',
  'have',
  'him',
  'in',
  'i',
  'if',
  'into',
  'is',
  'it',
  'its',
  'just',
  'know',
  'like',
  'long',
  'little',
  'my',
  'made',
  'may',
  'make',
  'more',
  'many',
  'most',
  'not',
  'no',
  'now',
  'or',
  'one',
  'of',
  'out',
  'other',
  'over',
  'only',
  'on',
  'people',
  'said',
  'she',
  'some',
  'so',
  'see',
  'the',
  'to',
  'they',
  'this',
  'there',
  'them',
  'then',
  'these',
  'two',
  'time',
  'than',
  'that',
  'their',
  'up',
  'use',
  'very',
  'was',
  'with',
  'what',
  'were',
  'when',
  'we',
  'which',
  'will',
  'would',
  'words',
  'where',
  'water',
  'who',
  'way',
  'you',
  'your',
];

@Component({
  selector: 'app-typing-game',
  standalone: true,
  imports: [NavigationComponent, FormsModule],
  templateUrl: './typing-game.component.html',
  styleUrl: './typing-game.component.css',
})
export class TypingGameComponent {
  counter: number = 0;
  current: string = sightWords[this.counter];
  inputValue: string = '';
  numCorrect: number = 0;
  numSkipped: number = 0;
  highestNum: number = 0;

  next() {
    if (this.counter + 1 < sightWords.length) {
      if (this.inputValue !== sightWords[this.counter]) {
        this.numSkipped++;
      }
      this.counter++;
      this.current = sightWords[this.counter];
      this.clearInput();
    }
  }

  previous() {
    if (this.counter - 1 >= 0) {
      this.counter--;
      this.current = sightWords[this.counter];
      this.clearInput();
    }
  }

  onKeyUp(event: any) {
    let inputArr = Array.from(this.inputValue);
    let charArr = Array.from(sightWords[this.counter]);
    this.inputValue = event.target.value;

    if (this.inputValue === sightWords[this.counter]) {
      if (this.counter >= this.highestNum) {
        this.highestNum++;
        this.numCorrect++;
        this.next();
      } else {
        this.next();
      }
    } else {
      inputArr.forEach((el: string, index: number) => {
        if (el === charArr[index]) {
          this.inputValue = event.target.value;
        } else {
          this.inputValue = this.inputValue.slice(
            0,
            this.inputValue.length - 1
          );
        }
      });
    }
  }

  clearInput() {
    this.inputValue = '';
  }
}
