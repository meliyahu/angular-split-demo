import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { SplitComponent, SplitAreaDirective } from 'angular-split';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'split-page'
  }
})
export class AppComponent {
  // @ViewChild('split', { static: false }) split: SplitComponent;
  // @ViewChild('area1', { static: false }) area1: SplitAreaDirective;
  // @ViewChild('area2', { static: false }) area2: SplitAreaDirective;

  direction: string = 'horizontal'
  sizes = {
    percent: {
      area1: 30,
      area2: 70,
    },
    pixel: {
      area1: 120,
      area2: '*',
      area3: 160,
    },
  }

  // constructor() {
  //   //super();

  //   setTimeout(() => {
  //     console.log('>>> split > ', this.split);
  //     console.log('>>> area1 > ', this.area1);
  //     console.log('>>> area2 > ', this.area2);
  //   }, 1000);
  // }

  getSize
  dragEnd(unit, { sizes }) {
    if (unit === 'percent') {
        this.sizes.percent.area1 = sizes[0];
        this.sizes.percent.area2 = sizes[1];
      }
    // else if (unit === 'pixel') {
    //   this.sizes.pixel.area1 = sizes[0];
    //   this.sizes.pixel.area2 = sizes[1];
    //   this.sizes.pixel.area3 = sizes[2];
    // }
  }
}
