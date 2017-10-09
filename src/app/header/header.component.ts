import {  Component, OnInit, Injectable, Inject  } from '@angular/core';
import { DependencyInterface } from '../dependency/dependency.interface';
import { Dependency } from '../dependency/dependency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class AppHeader {
  texto = 'header';
  private dependency : DependencyInterface;

  constructor(@Inject('DependencyInterface') dependency: DependencyInterface) {
    this.dependency = dependency;
  }

  getSearchDependency() {
  	this.dependency.getSearchDependencys().subscribe(
      data => {
          console.info(data);
      }, 
      err => {  
      }
    );
  }
}
