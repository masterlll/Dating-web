import { Component, OnInit } from '@angular/core';
import { AuthService} from '../_services/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authservice: AuthService) { }

  ngOnInit( ) {
  }

  login () {

    this.authservice.login(this.model).subscribe(next => {
      console.log('login succes ');
    }, error => {

      console.log(error);

    });
   console.log(this.model);

  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return!!token; // == if (token!=null) {return false }
  }


  logout() {
    localStorage.removeItem('token');
    console.log('logged out');

  }

}
