import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';

import { DependencyComponent } from './dependency/dependency.component';
import { Dependency } from './dependency/dependency';
import { DependencyService } from './dependency/dependency.service';

@NgModule({
  declarations: [
    AppComponent, AppHeader, DependencyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ { provide: 'Dependency', useClass: DependencyService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
