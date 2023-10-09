import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { JokenpoComponent } from './components/jokenpo/jokenpo.component';
import { HeaderComponent } from './components/header/header.component';
import { OptionsContainerComponent } from './components/options-container/options-container.component';
import { OptionComponent } from './components/option/option.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JokenpoComponent,
    HeaderComponent,
    OptionsContainerComponent,
    OptionComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
