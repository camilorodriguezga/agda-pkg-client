import { Observable } from 'rxjs/Observable';

export interface DependencyInterface {
	getDependencys()       : Observable<any>;
	getSearchDependencys() : Observable<any>;
}