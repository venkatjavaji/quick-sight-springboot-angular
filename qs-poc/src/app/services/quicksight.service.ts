// src/app/services/quicksight.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class QuicksightService {
    private consoleUrl = '/api/quicksight/console';
    private dasboardUrl = '/api/quicksight/dashboard/<nameofthedashboard>';

    constructor(private http: HttpClient) { }

    getEmbedUrl(userName: any): Observable<any> {
        const params = new HttpParams().set('userName', userName);
        return this.http.get<any>(this.dasboardUrl, { params: params, responseType: 'text' as 'json' });
    }

    getQSConsoleEmbedUrl(userName: any) {
        const params = new HttpParams().set('userName', userName);
        return this.http.get<any>(this.consoleUrl, { params: params, responseType: 'text' as 'json' });
    }
}