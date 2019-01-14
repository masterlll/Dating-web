import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  values: any ;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getvalue();
  }

  registerToggle() {
    this.registerMode = true ;

  }

  getvalue() {

    this.http.get('http://localhost:5000/api/values').subscribe(re => {
      this.values = re;
      }, err => {
        console.log(err);
      });
  }

  cancelRegisterMode(registerMode: boolean) {
         this.registerMode = registerMode;
       }

}
