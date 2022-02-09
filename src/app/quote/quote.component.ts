import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(
      1,
      '"The greatest glory in living life not in never falling, but in rising every time we fall."',
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
  completequote(isComplete: any, index: number) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote);
  }

  toggleDetails(index: any) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  constructor() {}

  ngOnInit() {}
}
