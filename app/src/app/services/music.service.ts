import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { host, prefix } from '../util/config'

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  url = host + prefix
  constructor(private http: HttpClient) {

  }

  fetchNoise(id: string) {
    return this.http.get(`${this.url}/noise/${id}`)
  }

  fetchMusdic(id:string){
    return this.http.get(`${this.url}/music/${id}`)
  }
}
