import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'qAGenEznqLhXzx4Rt7XMel0SQrWfTSGOobeCeo0u';
  private imageDates: string[] = [];

  constructor(private http: HttpClient) { }

  getAstronomicalImages(page: number = 1, itemsPerPage: number = 20): Observable<any[]> {
    const requests: Observable<any>[] = [];
  
    for (let i = (page - 1) * itemsPerPage; i < page * itemsPerPage; i++) {
      const date = this.imageDates[i];
  
      const params = {
        api_key: this.apiKey,
        date: date,
        hd: true
      };
  
      const request = this.http.get<any>(this.apiUrl, { params }).pipe(
        map((response: any) => {
          this.imageDates.push(response.date);
          return response;
        })
      );
  
      requests.push(request);
    }
  
    return forkJoin(requests);
  }

  fillImageDates(n: number): void {
    const today = new Date();
    for (let i = 0; i < n; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      this.imageDates[i] = date.toISOString().split('T')[0];
    }
  }

  getAstronomicalImage(id: string): Observable<any> {
    const params = {
      api_key: this.apiKey,
      date: id,
      hd: true
    };

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map((response: any) => response)
    );
  }
}
