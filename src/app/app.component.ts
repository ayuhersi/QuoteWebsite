import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(_title: any) {
    throw new Error('Method not implemented.');
  }
  quotes = [
    new Quote(
      1,
      '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
      '-Nelson Mandela',
      'AH',
      ''
    ),
    new Quote(
      2,
      'Spread love everywhere you go. Let no one ever come to you without leaving happier."',
      '-Mother Teresa',
      'AH',
      ''
    ),
    new Quote(
      3,
      '"Whoever is happy will make others happy too."',
      '-Anne Frank',
      'AH',
      ''
    ),
  ];
  constructor() {}
}
