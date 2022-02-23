import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data:any;
  constructor(private httpClient: HttpClient) { }
  getBook(): Observable<any>{
    return this.httpClient.get("http://openlibrary.org/search.json?q=%7Bquery");
  }

  getBookDetail(): Observable<any>{
      return this.httpClient.get("http://openlibrary.org"+this.data+".json");
  }
}

