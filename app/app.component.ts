import { Component }         from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import { HeroListComponent }        from './toh/hero-list.component';
import { HeroListPromiseComponent } from './toh/hero-list.component.promise';

import { WikiComponent }      from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';
import { Adam } from './adam/adam';

@Component({
  selector: 'my-app',
  template: `
    <adam-comp-sel>adam goes here...</adam-comp-sel>
  `,
/*
  providers: [ HTTP_PROVIDERS ]
*/
  directives: [ Adam ]
})
export class AppComponent {

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
