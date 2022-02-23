import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private httpClient: HttpClient, private api:ApiService) { }
   book={
     title:'',
     lastEdit:'',
     publishDate:'',
     subjects:[],
     pages:''
   }
  ngOnInit(): void {
    this.api.getBookDetail().subscribe(
      data=>{
        
        this.book.title=data.title;
        this.book.lastEdit=data.last_modified['value'];
        this.book.publishDate=data.publish_date;
        this.book.subjects=data.subjects;
        this.book.pages=data.number_of_pages;
        console.log(this.book);
        
      }
    )

  }


}
