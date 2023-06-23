import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { teachers } from '../models/teachers.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  
  private baseUrl: string = 'http://localhost:3000/TeachersRegisters';

  constructor(private http: HttpClient) { }
  
  postRegistration(registerObj: teachers): Observable<teachers> {
    return this.http.post<teachers>(this.baseUrl, registerObj);
  }
  
  getRegisteredUsers(): Observable<teachers[]> {
    return this.http.get<teachers[]>(this.baseUrl);
  }
  
  updateRegisteredUser(registerObj: teachers, id: number): Observable<teachers> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<teachers>(url, registerObj);
  }
  
  deleteRegistered(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  getRegisteredUserById(id: number): Observable<teachers> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<teachers>(url);
  }

  login(email: string, password: string): Observable<teachers | null> {
    return this.getRegisteredUsers().pipe(
      map((users: teachers[]) => {
        const matchedUser = users.find(user => user.email === email && user.password === password);
        return matchedUser ? matchedUser : null;
      })
    );
  }

}
