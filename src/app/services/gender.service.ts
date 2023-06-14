import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gender } from '../models/gender.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GenderService {
    private baseApiUrl = 'https://localhost:7102/api';

    constructor(
        private _httpClient: HttpClient
    ) { }

    public getAll(): Observable<Gender[]> {
        return this._httpClient.get<Gender[]>(`${this.baseApiUrl}/Genders/get-all`);
    }

}