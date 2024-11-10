import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  private apiUrl = 'http://localhost:3000/funds';

  constructor(private httpClient: HttpClient) {}

  createFund(fund: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, fund);
  }

  getFunds(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}`);
  }
}
