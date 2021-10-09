import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
 
  newquotes = new Quotes("","","","",new Date());
  @Output() addquote = new EventEmitter <Quotes>();
  submitQuotes(){
    this.addquote.emit(this.newquotes)
  }
  constructor() { }

  ngOnInit(): void {
  }

}

