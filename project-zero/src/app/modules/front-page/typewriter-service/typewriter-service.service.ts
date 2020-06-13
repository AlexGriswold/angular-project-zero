import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TypewriterService {

  constructor() { }

  getTextSub(content): Observable<number> {
    const timePerLetter = interval(25);
    return timePerLetter.pipe(take(content.length)).pipe(map((index) => {
      return content.slice(0, index + 1);
    }));
  }

}
