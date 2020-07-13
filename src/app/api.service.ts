import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const localUrl = 'assets/data/data.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(localUrl);
  }
}
