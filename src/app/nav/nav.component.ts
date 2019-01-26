import { Component, OnInit } from '@angular/core';
import { AuthService} from '../_services/auth.service';
import { AlerityService } from '../_services/alerity.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authservice: AuthService, private alertify: AlerityService , private router: Router) { }

  ngOnInit( ) {
  }

  login () {

    this.authservice.login(this.model).subscribe(next => {
      this.alertify.success('login succes');
    }, error => {
      this.alertify.error(error);
    } ,　() =>　{
     this.router.navigate(['/members']);
    }　);
   console.log(this.model);

  }

  loggedIn() {
    return this.authservice.loggedIn();
  }


  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);

  }

}
