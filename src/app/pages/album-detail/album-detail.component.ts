import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { SpotifyService } from './../../service/spotify.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  public trackDetailList = [];
  public album = [];

  constructor(
    private router: ActivatedRoute,
    private router2: Router,
    private spotify: SpotifyService
  ) { }

  ngOnInit() {
    this.getParamByRoute();
  }

  getParamByRoute() {
    this.router.params.subscribe(params => {

      this.getAlbumDetail(params['id']);
      this.getAlbumTracks(params['id']);

    });
  }

  getAlbumTracks(id) {
    this.spotify.getAlbumTracks(id).subscribe((res: any) => {
      this.trackDetailList = res.items;
    });
  }

  getAlbumDetail(id) {
    this.spotify.getAlbumDetail(id).subscribe((res: any) => {
      this.album = res;
    });
  }

  backHomePage() {
    this.router2.navigate(['/home']);
  }

}
