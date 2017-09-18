import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Dependency } from './dependency';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css']
})
export class DependencyComponent implements OnInit {

  private dependency : Dependency;
  private info : String;

  constructor(@Inject('Dependency') dependency: Dependency) {
    this.dependency = dependency;
  }

  ngOnInit() {
    this.getDependency();
  }

  getDependency() {
  	this.dependency.getDependencys().subscribe(
      data => {
          console.info(data);
         this.info = data;
      }, 
      err => {  
      }
    );
  }

}
