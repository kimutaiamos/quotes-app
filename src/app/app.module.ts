import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuotesDetailsComponent,
    QuotesFormComponent,
    QuotesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
