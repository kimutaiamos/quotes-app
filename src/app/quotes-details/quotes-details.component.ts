import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  faCoffee = faTrash;
  faThumbsDown=faThumbsDown;
  faThumbsUp = faThumbsUp;

  @Input() quote!:Quotes;
  @Output() remove = new EventEmitter<boolean>();
  noOflike: number =0;
  delete(complete:boolean){
    this.remove.emit(complete);
  }
  constructor() { }
 
  Like(){
    this.noOflike++; 
  }
  Dislike(){
    this.noOflike--;
  }
  ngOnInit(): void {
  }
}

