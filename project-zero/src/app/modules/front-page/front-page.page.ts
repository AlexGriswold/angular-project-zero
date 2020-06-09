import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.page.html',
  styleUrls: ['./front-page.page.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrontPageComponent implements AfterViewInit, OnDestroy {

  content = 'Test content';
  currentContent = '';
  intervalObservable = new Observable;

  takeFourNumbers: Observable<number>;
  numberSub: Subscription;

  constructor(
  ) { }

  ngAfterViewInit(): void {
    const numbers = interval(100);
    this.takeFourNumbers = numbers.pipe(take(this.content.length));
    this.numberSub = this.takeFourNumbers.subscribe(x => {
      this.currentContent += this.content[x];
    });
  }

  ngOnDestroy(): void {
    this.numberSub.unsubscribe();
  }

}
