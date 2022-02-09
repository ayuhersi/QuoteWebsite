import {
  Component,
  HostBinding,
  OnInit,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
})
export class QuoteDetailsComponent implements OnInit {
  constructor() {
    this.vote = 0;
  }

  @Input()
  quotes!: Quote;
  vote = 0;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  numberOfVotes: number = 0;

  thumbsUpButtonClick() {
    this.numberOfVotes++;
  }
  thumbsDownButtonClick() {
    this.numberOfVotes--;
  }

  ngOnInit() {}
}
