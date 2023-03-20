import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { content } from 'helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {
  getContent(): Observable<any> {
    const contentArray = of(content);
    return contentArray;
  }
  getSingleContent(id: number): Observable<any> {
    const singleContent = of(content.find(c => c.id === id));
    return singleContent;
  }
}
