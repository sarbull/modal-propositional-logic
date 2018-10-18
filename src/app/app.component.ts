import { Component, OnInit } from '@angular/core';
import { Graph } from '../helpers/graph';
// import * as MPL from '../../lib/mpl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'mpl';
  graph: any;

  ngOnInit() {
    const el = <HTMLElement>document.getElementsByClassName('graph')[0];

    this.graph = new Graph(
      el.offsetWidth,
      el.offsetHeight,
      '.graph'
    );
  }
}
