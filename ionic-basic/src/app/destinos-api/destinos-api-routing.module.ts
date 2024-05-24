import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://ioniclab.firebaseio.com');
  }

  postData(data: any) {
    return this.http.post('https://ioniclab.firebaseio.com', data);
  }

  
}