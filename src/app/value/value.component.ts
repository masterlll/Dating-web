import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

value: any;
// public a: string;


  constructor(private http: HttpClient)  {
    this.getvalue();
   }

ngOnInit() {

}

getvalue() {

  this.http.get('http://localhost:5000/api/values').subscribe(re => {
    this.value = re;
    }, err => {
      console.log(err);
    });
     }

}
