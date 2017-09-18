import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Dependency } from './Dependency';
import 'rxjs/Rx';

const BASE_URL = 'http://13.59.101.187:5000/api/';
//const BASE_URL = 'http://127.0.0.1:5000/api/';

@Injectable()
export class DependencyService implements Dependency {

  	constructor(private http: Http) {}

	public getDependencys() : Observable<any>{
	   	return this.http.get(BASE_URL)
			.map(response => response.json())
			.catch(error => this.handleError(error));
		}

		private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}
