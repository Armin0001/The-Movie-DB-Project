import { Component, OnInit, ViewChild, AfterViewInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MainScreenComponent} from './../main-screen/main-screen.component';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  protected data:any = []
  
  imgUrl: String = "https://image.tmdb.org/t/p/original/";
  counter: number = 0;
  contentType: String = "movie";
  target: String = "";
  startup: any = "https://api.themoviedb.org/3/movie/top_rated?api_key=f5925da8717a67c2d4f9f7f9371da6b6#&language=en-US"
  url: any = "https://api.themoviedb.org/3/movie/top_rated?api_key=f5925da8717a67c2d4f9f7f9371da6b6#&language=en-US&page=1";
  wasClicked: boolean = false;
  clickedId: String = "";
  route: any;
  typingTimer: any;                
  doneTypingInterval: number = 3000;
  showResults: boolean = false;
  newTypingTimer: any;
  newSearch: any = [];

  


  constructor(private http: HttpClient, private myService: DataServiceService) { }

  ngOnInit(): void {
    
    this.wasClicked = false;
    this.http.get(this.startup).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

 
  getData(){
    
    this.http.get(this.url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
}

  getListName() {
    console.log(this.contentType);
  }

  changeTv(x: any) {
    this.contentType = "tv";
    if (this.target.length > 2) {
      this.url = "https://api.themoviedb.org/3/search/" + this.contentType + "?api_key=f5925da8717a67c2d4f9f7f9371da6b6&language=en-US&query=" + this.target;
    }
    else 
      this.url = "https://api.themoviedb.org/3/tv/top_rated?api_key=f5925da8717a67c2d4f9f7f9371da6b6#&language=en-US&page=1";
    
    console.log(x);
    this.getData();
  }
  changeMovie(x: any) {
    this.contentType = "movie";
    if (this.target.length > 2) {
      this.url = "https://api.themoviedb.org/3/search/" + this.contentType + "?api_key=f5925da8717a67c2d4f9f7f9371da6b6&language=en-US&query=" + this.target;
    }
    else 
      this.url = "https://api.themoviedb.org/3/movie/top_rated?api_key=f5925da8717a67c2d4f9f7f9371da6b6#&language=en-US&page=1";
    
    console.log(x);
    this.getData();
  }

 
  inputChange(newValue: any) {

    if (newValue.length > 2) {
      this.showResults=true
      this.target = newValue;
      console.log(newValue);
      this.url = "https://api.themoviedb.org/3/search/" + this.contentType + "?api_key=f5925da8717a67c2d4f9f7f9371da6b6&language=en-US&query=" + newValue;
      this.getData();
  } 
}

  typingFunc(newValue: any) {
       console.log(newValue);
       
       
       clearTimeout(this.typingTimer);
       this.typingTimer = setTimeout(()=>{
       this.inputChange(newValue)
    }, this.doneTypingInterval);
      
  } 

 

  titleClick(selected: any) {
    console.log(selected);
    this.wasClicked = true;
    this.clickedId = selected.id;
    console.log(this.clickedId);
    
    
  }

  




}

