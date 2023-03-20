import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from 'helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {
  private apiUrl = 'http://localhost:3000/content';

  constructor(private http: HttpClient) {}

  testFunction(content: Content): Observable<any> {
    return this.http.post<any>(this.apiUrl, content);
  }

  getAll() {
    return this.http.get(this.apiUrl);
  }

  add(content) {
    return this.http.post(this.apiUrl, content);
  }

  update(content) {
    return this.http.put(`${this.apiUrl}/${content.id}`, content);
  }

  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}



