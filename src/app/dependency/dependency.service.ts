import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DependencyInterface } from './dependency.interface';
import 'rxjs/Rx';

//const BASE_URL = 'http://13.59.101.187:5000/api/';
const BASE_URL = 'http://localhost:5000/api/list/library';

export class Dependency {
  constructor(
  	public id: number, 
  	public description: string, 
  	public homepage: string,
	public name: string,
    public sourceRepository: string,
    public uploaded: string) { }
}

@Injectable()
export class DependencyService implements DependencyInterface {

  	constructor(private http: Http) {}

	public getDependencys() : Observable<any>{
	   	return this.http.get(BASE_URL)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	public getSearchDependencys() : Observable<any>{
	   	return this.http.get(BASE_URL)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}

}
