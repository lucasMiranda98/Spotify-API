import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyService } from './service/spotify.service';
import { HomeComponent } from './pages/home/home.component';
import { AlbumDetailComponent } from './pages/album-detail/album-detail.component';
import { AlbumPreviewComponent } from './pages/album-preview/album-preview.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { DomSanitizerPipe } from './pipes/dom-sanitizer.pipe';
import { FormatMinPipe } from './pipes/format-min.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumDetailComponent,
    AlbumPreviewComponent,
    NoImagePipe,
    DomSanitizerPipe,
    FormatMinPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
