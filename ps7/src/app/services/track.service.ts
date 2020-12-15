import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trackConfig } from '../config/trackConfig';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  constructor(private http: HttpClient) {}

    getTracks(artistName: string): Observable<any> {
      return this.http.get(trackConfig.baseURL + trackConfig.apiKey + artistName,
        {observe: 'body', responseType: 'json'});
    }
}

