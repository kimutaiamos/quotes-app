import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CountPipe } from './count.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    QuotesDetailsComponent,
    QuotesFormComponent,
    QuotesComponent,
    FooterComponent,
    CountPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule

  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
