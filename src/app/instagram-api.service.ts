import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Posts } from './classes'

@Injectable({
    providedIn: 'root'
})

export class InstagramApiService{
    constructor(private http: HttpClient){}

    getPosts(): Observable<Posts[]>{
        return this.http.get<Posts[]>('http://5dfbcd3d0301690014b8fff9.mockapi.io/PostDetails');
    }
}