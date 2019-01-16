import { Component, OnInit } from '@angular/core';
import { AuthService} from '../_services/auth.service';
import { AlerityService } from '../_services/alerity.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authservice: AuthService, private alertify: AlerityService) { }

  ngOnInit( ) {
  }

  login () {

    this.authservice.login(this.model).subscribe(next => {
      this.alertify.success('login succes');
    }, error => {
      this.alertify.error(error);
    });
   console.log(this.model);

  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return!!token; // == if (token!=null) {return false }
  }


  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');

  }

}
