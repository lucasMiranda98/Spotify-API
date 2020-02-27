import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../../service/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public album = [];
  public name: string;

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
        this.spotify.getToken();
  }

  searchByName(name: string) {
    this.name = name;
    this.spotify.getAllAlbums(name)
      .subscribe((res: any) => {
        this.album = res;
      });
  }

  public getRecentTracks() {
    this.spotify.getRecentPlayed().subscribe(res => {
    });
  }
}
