/**
 * Data service handles the interactions between
 * the app and a REST API via http.
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5000/data';

  constructor(private http: HttpClient) {}

  /**
   * GetData retries data from the API via a GET request
   * Since the data structure isn't specified and could change,
   * there was no need to create an interface.
   */
  getData(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
