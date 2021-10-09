import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quote: Quotes[]=[
    new Quotes(
      'happiness',
      'Mahatma ghandhi',
      'happiness , is when waht you think ,what you say and what you think are in harmony:.',
      'it tells more of the happy life',
      new Date(2000,3,10)
    ),
    new Quotes(
      'joy',
      'Thich Nhat Hanh',
      'The present moment is filled with joy and happiness.Action may not always bring happiness, but there is no happiness without action. If you are attentive, you will see it.',
      'tells of the strugles we go through',
      new Date(2021,3,4)
    ),
  ];
  addNewQuote(quote){
  
    quote.datepublished= new Date(quote.completeDate)
    this.quote.push(quote);
  }

  toggle(index){
    this.quote[index].showDetails = !this.quote[index].showDetails;
  }
  completeGoal(isComplete, index){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
