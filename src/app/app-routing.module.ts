import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { MoviesViewComponent} from './movies-view/movies-view.component';


const routes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'tv/:id', component: DetailsViewComponent },
    { path: 'movie/:id', component: MoviesViewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
