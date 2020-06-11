import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TypewriterService {

  constructor() { }

  getTextSub(content): any {
    const timePerLetter = interval(50);
    return timePerLetter.pipe(take(content.length)).pipe(map((index) => {
      return content.slice(0, index + 1);
    }));
  }

}
