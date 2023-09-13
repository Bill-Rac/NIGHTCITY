import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getFirstTenPosts(): Observable<any[]> {
    const url = `${this.apiUrl}/posts?_limit=8`;
    return this.http.get<any[]>(url);
  }

  getFirstTenTodos(): Observable<any[]> {
    const url = `${this.apiUrl}/todos?_limit=8`;
    return this.http.get<any[]>(url);
  }

  getFirstTenUsers(): Observable<any[]> {
    const url = `${this.apiUrl}/users?_limit=8`;
    return this.http.get<any[]>(url);
  }

  getFirstTenComments(): Observable<any[]> {
    const url = `${this.apiUrl}/comments?_limit=8`;
    return this.http.get<any[]>(url);
  }
}
