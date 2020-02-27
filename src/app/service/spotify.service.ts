import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private token: string;
  private canCall = false;
  constructor(private http: HttpClient) {
  }

  getToken() {
    const headers = new HttpHeaders()
      .set('Authorization', 'Basic NzMyNThhMzBkOWNjNDJkZjlhZGRhZDQ3NDFlNTFkM2M6N2Q0MTUzOWRjZmMxNGM4MTllZjc2ZDFjNjYxMDVmN2E=')
      .set('Content-Type', 'application/x-www-form-urlencoded');

    const body = new HttpParams()
      .set('grant_type', 'client_credentials');
    this.http.post(environment.token, body, { headers }).subscribe((res: any) => {
      this.token = res.access_token;
      this.canCall = true;
    });
  }

  getQuery(query: string) {
    if (this.canCall) {
      const url = `${environment.API}${query}`;
      const headers = new HttpHeaders({
        Authorization:
          `Bearer ${this.token}`
      });

      return this.http.get(url, { headers });
    }
  }

  getAllAlbums(name: string) {
    return this.getQuery(`search?q=${name}&type=album&limit=15`).pipe(
      map(data => data['albums'].items)
    );
  }

  getRecentPlayed() {
    return this.getQuery(`me/player/recently-played`).pipe(
      map(data => console.log(data))
    );
  }

  getAlbumDetail(id) {
    return this.getQuery(`albums/${id}`);
  }

  getAlbumTracks(id: string) {
    return this.getQuery(`albums/${id}/tracks`);
  }
}
