import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TypewriterService {

  constructor() { }

  getTextSub(content): Observable<any> {
    // Should return one letter at a time.
    const timePerLetter = interval(25);
    return timePerLetter.pipe(take(content.length)).pipe(map((index) => {
      return {
        letter: content.slice(index, index + 1),
        isDone: index === content.length - 1
      }
    }));
  }

}
