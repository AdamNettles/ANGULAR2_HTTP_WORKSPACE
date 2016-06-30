// Observable Version
import { Component, OnInit } from '@angular/core';
import { AdamService }       from './adamService';

@Component({
  selector: 'adam-comp-sel',
  templateUrl: 'app/adam/adam.html',
  providers: [ AdamService ]
})
export class Adam implements OnInit {
  errorMessage: string;
  result: string;
  mode = 'Observable';

  constructor (private adamService: AdamService) {
    console.info('Adam constructor');
  }

  ngOnInit() {
    console.info('Adam ngOnInit');
    this.getThatThing();
  }

  getThatThing() {
    console.info('Adam getThatThing()');
    this.adamService.getThatThing();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
