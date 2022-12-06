import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { FormsModule } from '@angular/forms';
import { PipeTransformPipe } from './pipe-transform.pipe';
import { TvPipePipe } from './tv-pipe.pipe';
import { DetailsViewComponent } from './details-view/details-view.component';
import { MoviesViewComponent } from './movies-view/movies-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MainScreenComponent,
    PipeTransformPipe,
    TvPipePipe,
    DetailsViewComponent,
    MoviesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
