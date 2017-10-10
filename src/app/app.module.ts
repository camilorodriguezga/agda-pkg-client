import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';

import { DependencyComponent } from './dependency/dependency.component';
import { DependencyInterface } from './dependency/dependency.interface';
import { DependencyService } from './dependency/dependency.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, AppHeader, DependencyComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    MatCardModule
  ],
  providers: [ { provide: 'DependencyInterface', useClass: DependencyService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
