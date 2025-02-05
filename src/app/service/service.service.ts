import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private _httpClient: HttpClient) {}

  getData(): Observable<any> {
    return this._httpClient.get('http://localhost:3000/data');
  }
}
