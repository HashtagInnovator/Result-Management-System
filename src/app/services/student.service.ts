import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from '../models/student.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  private baseUrl: string = 'http://localhost:3000/student';

  constructor(private http: HttpClient) { }
  
  postRegistration(registerObj: student): Observable<student> {
    return this.http.post<student>(this.baseUrl, registerObj);
  }
  
  getRegisteredUsers(): Observable<student[]> {
    return this.http.get<student[]>(this.baseUrl);
  }
  
  updateRegisteredUser(registerObj: student, id: number): Observable<student> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<student>(url, registerObj);
  }
  
  deleteRegistered(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  getRegisteredUserById(id: number): Observable<student> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<student>(url);
  }

  login(email: string, password: string): Observable<student | null> {
    return this.getRegisteredUsers().pipe(
      map((users: student[]) => {
        const matchedUser = users.find(user => user.email === email && user.password === password);
        return matchedUser ? matchedUser : null;
      })
    );
  }

}
