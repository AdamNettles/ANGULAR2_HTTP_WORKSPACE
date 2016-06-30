// Observable Version
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

// import { Hero }           from './hero';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class AdamService {
  constructor (private http: Http) {}

  private adamUrl = 'http://jsonplaceholder.typicode.com/posts/1';  // URL to web API

  getThatThing () {
    console.info('AdamService getThatThing()');
    var result = this.http.get(this.adamUrl)
                    // .map(this.extractData)
                    .catch(this.handleError);
    console.info(result);
    return result;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

/*
  private heroesUrl = 'app/heroes.json'; // URL to JSON file
*/


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
