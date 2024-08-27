import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterDto } from '../dtos/register.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:8888/api/v1/users/register';
  constructor(private http: HttpClient) { }
  register(registerDto: RegisterDto): Observable<any> { 
    const headers = new HttpHeaders ({ 'Content-type': 'application/json'});
    return this.http.post(this.apiUrl, registerDto, { headers });
  }
}
