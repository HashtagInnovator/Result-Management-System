import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { records } from '../models/records.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordServiceService {
  
  private baseUrl: string='http://localhost:3000/Records';
  constructor(private http:HttpClient) { }
  
  postRegisteration(registerObj:records)
  {
    return this.http.post<records[]>(`${this.baseUrl}`, registerObj)
  }
  getRegisteredUser() {
    return this.http.get<records[]>(`${this.baseUrl}`);
  }
  
  updateRegisteredUser(registerObj: records, id: number) {
    return this.http.put<records[]>(`${this.baseUrl}/${id}`, registerObj);
  }
    
  deleteRegistered(id: number) {
    return this.http.delete<records>(`${this.baseUrl}/${id}`);
  }

  deleteRecord(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  getRegisteredUserId(id: number) {
    return this.http.get<records>(`${this.baseUrl}/${id}`); // Update the return type to records
  }

  search(rollNumber: number, dateOfBirth: Date): Observable<records | null> {
    return this.getRegisteredUser().pipe(
      map((users: records[]) => {
        const dateString = this.convert(dateOfBirth);
  
        const matchedSearch = users.find(user => user.rollNumber === rollNumber && this.convert(user.dateOfBirth) === dateString);
        return matchedSearch ? matchedSearch : null;
      })
    );
  }
  
  convert(date: Date): string {
    const dateString = date.toString();
    const parsedDate = Date.parse(dateString);
    if (!isNaN(parsedDate)) {
      const formattedDate = new Date(parsedDate).toDateString();
      return formattedDate;
    }
    return '';
  }
  
}
