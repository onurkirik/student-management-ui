import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private baseApiUrl = 'https://localhost:7102/api';

  constructor(private _httpClient: HttpClient) { }

  public getAll(): Observable<Student[]> {
    return this._httpClient.get<Student[]>(`${this.baseApiUrl}/Students/get-all`);
  }

}
