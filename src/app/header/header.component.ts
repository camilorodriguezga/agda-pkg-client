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
  private search = "";

  constructor(@Inject('DependencyInterface') dependency: DependencyInterface) {
    this.dependency = dependency;
  }

  getSearchDependency() {
  	this.dependency.getSearchDependencys(this.search).subscribe(
      data => {
      		console.info(this.search);
          	console.info(data);
      }, 
      err => {  
      }
    );
  }
}
