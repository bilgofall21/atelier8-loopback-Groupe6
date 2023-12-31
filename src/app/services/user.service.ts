import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://[::1]:3000/users';
  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(this.url)
  }
}
