import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  title = 'booklist';
  book:any[]=[];
  constructor(private api:ApiService,
    private router:Router){}
  ngOnInit(){
    this.api.getBook().subscribe(
      data=>{
        
        this.book=data.docs;
      }
    )
  }
  sendTitle(data:any){
   console.log(data);
   this.api.data=data;
   this.router.navigate(['book'],data);
   
  }
  result(x:any){
    console.log(x);
    if(x==''){
      this.api.getBook().subscribe(
        data=>{
          
          this.book=data.docs;
        }
      )
    }
    else{
      this.book=this.book.filter((data => data.title.toLowerCase().includes(x.toLowerCase())))
    }
  }
}
