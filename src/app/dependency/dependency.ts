import { Observable } from 'rxjs/Observable';

export interface Dependency {
	getDependencys() : Observable<any>;
}
