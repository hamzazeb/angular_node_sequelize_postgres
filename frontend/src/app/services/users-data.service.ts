import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:5000/api/';

  users() {
    return this.http.get(this.url+'channels/users/2')
  }

  saveUser(data:any){
    return this.http.post(this.url+'users', data)
  }

  loginUser(data:any){
    return this.http.put(this.url+'users/login', data)
  }

  showChannels(data:any){
    return this.http.get(this.url+'channels/users/'+data);
  }
}
