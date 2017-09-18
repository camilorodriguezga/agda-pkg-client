import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { DependencyInterface } from './dependency.interface';
import { Dependency } from './dependency.service';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css']
})
export class DependencyComponent implements OnInit {

  private dependency : DependencyInterface;
  private listDependency : Dependency;

  constructor(@Inject('DependencyInterface') dependency: DependencyInterface) {
    this.dependency = dependency;
  }

  ngOnInit() {
    this.getDependency();
  }

  getDependency() {
  	this.dependency.getDependencys().subscribe(
      data => {
          console.info(data);
         this.listDependency = data;
      }, 
      err => {  
      }
    );
  }

}
