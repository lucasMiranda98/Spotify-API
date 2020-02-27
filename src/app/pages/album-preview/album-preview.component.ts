import { SpotifyService } from './../../service/spotify.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-preview',
  templateUrl: './album-preview.component.html',
  styleUrls: ['./album-preview.component.css']
})
export class AlbumPreviewComponent implements OnInit {

  @Input() albumsItens: any[] = [];

  constructor( private spotifyService: SpotifyService, private router: Router) { }

  ngOnInit() {
  }

  getDetails(item: any) {
    const idAlbum = item.id;
    this.router.navigate(['detalhes-album', idAlbum]);
  }
}
