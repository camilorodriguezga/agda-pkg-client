import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';

import { DependencyComponent } from './dependency/dependency.component';
import { DependencyInterface } from './dependency/dependency.interface';
import { DependencyService } from './dependency/dependency.service';

@NgModule({
  declarations: [
    AppComponent, AppHeader, DependencyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [ { provide: 'DependencyInterface', useClass: DependencyService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
