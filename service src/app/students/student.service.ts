import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Student } from './student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private base = ${environment.apiUrl}/students;
  constructor(private http: HttpClient) {}

  all(): Observable<Student[]> { return this.http.get<Student[]>(this.base); }
  create(s: Student): Observable<Student> { return this.http.post<Student>(this.base, s); }
  update(id: number, s: Student): Observable<Student> { return this.http.put<Student>(${this.base}/${id}, s); }
  delete(id: number): Observable<void> { return this.http.delete<void>(${this.base}/${id}); }
  getOne(id: number): Observable<Student> { return this.http.get<Student>(${this.base}/${id}); }
}
