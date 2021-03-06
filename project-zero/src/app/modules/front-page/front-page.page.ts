import { Component } from '@angular/core';
import { timer } from 'rxjs';

import { TypewriterService } from './typewriter-service/typewriter-service.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.page.html',
  styleUrls: ['./front-page.page.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrontPageComponent {

  textSub;
  textArray = [];
  hideGithubLink = true;
  content = `Hello, there!

  My name is Alex. I\'m a Front End Developer. Basically, everything you can see and interact with on the Internet was made by someone like me.

  The point of this website is to show potential employers that I know how to do this job.

  This website was built with Angular 9. It provides an example case for lazy-loading, the router, services, subscriptions with RxJS, API integrations, and data binding.`;

  constructor(private _typewriterService: TypewriterService) {
    this.textSub = this._typewriterService.getTextSub(this.content).subscribe((data) => {
      this.textArray.push(data.letter);
      data.isDone ? this.hideGithubLink = false : null ;
    });
  }

  onLetterMouseover(event): void {


    // console.log(event.srcElement.classList);
    event.srcElement.classList.add('growletter');
  }

  onLetterMouseout(event): void {
    const timerSource = timer(5000);
    const timerSub = timerSource.subscribe((data) => {
      event.srcElement.classList.remove('growletter');
    });
  }

}
