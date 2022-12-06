import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContentComponent } from '../content/content.component';
//import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DataServiceService } from '../data-service.service';
import {Observable} from "rxjs";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.css']
})
export class MoviesViewComponent implements OnInit {
  protected myData:any = []
  mySelectedId: String = "";
  state$!: Observable<object>;
  imgUrl: String = "https://image.tmdb.org/t/p/original/"
  id: any;
  sub: any;
  route: any;
  myId: any;
  
  
  constructor(public myContent : ContentComponent, public activatedRoute: ActivatedRoute, public dataService: DataServiceService, private router: Router, private http: HttpClient) {
    
  }

  ngOnInit(): void {
    console.log(this.router.url);
    this.myId = this.router.url.split('/').pop();
    console.log(this.myId);
    console.log(typeof(this.myId));
    this.http.get("https://api.themoviedb.org/3/movie/" + this.myId + "?api_key=f5925da8717a67c2d4f9f7f9371da6b6").subscribe((res)=>{
      this.myData = res
      console.log(this.myData)
    })
  }


  

  clickAction() {
    console.log("The selected title's ID, called from details-view component, is: ");
    console.log(this.mySelectedId);   
}



  

}



