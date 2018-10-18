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
    this.graph = new Graph(750, 750, '.graph');
  }
}
