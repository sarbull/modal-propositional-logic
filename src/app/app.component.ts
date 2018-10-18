import { Component, OnInit } from '@angular/core';
import * as MPL from '../../lib/mpl';
import { Graph } from './Graph';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mpl';

  ngOnInit() {
    console.log(new MPL.Model());

    new Graph(750, 600, '.graph');
  }
}
