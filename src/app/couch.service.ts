import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouchService {

  readonly baseURL = 'http://localhost:5984/sample';
  readonly username = 'admin'; 
  readonly password = 'admin'; 

  constructor(private http: HttpClient) { }

  getAllDocuments(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${this.username}:${this.password}`)
    });
    console.log(`${this.baseURL}/_all_docs`, { headers })
    return this.http.get<any>(`${this.baseURL}/_design/Details/_view/i`, { headers });
  }

  getDocumentById(docId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${this.username}:${this.password}`)
    });

    return this.http.get<any>(`${this.baseURL}/${docId}`, { headers });
  }
}
