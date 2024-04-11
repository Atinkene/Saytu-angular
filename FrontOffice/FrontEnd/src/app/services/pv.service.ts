import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PvService {
  private apiUrl = 'http://localhost:3000/create-pv'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  createPv(contenu: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { contenu });
  }
}
