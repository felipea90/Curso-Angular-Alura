import { Photo } from './photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000'

@Injectable({ providedIn: 'root' })

export class PhotoService
{
  constructor(private http: HttpClient)
  {

  }

  listFromUser(userName: any)
  {
    return this.http
    .get<Photo[]>(API + '/flavio/photos');
  }
}
