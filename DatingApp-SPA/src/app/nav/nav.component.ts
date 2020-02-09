import { ToastrModule, Toastr, ToastrManager } from 'ng6-toastr-notifications';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private auth: AuthService, private toaster: ToastrManager) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.model).subscribe(next => {
      this.toaster.successToastr('Login Successful');
    },
      error => {
        this.toaster.errorToastr('Failed to log in !! Try again');
      });
  }

  loggedin() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.toaster.successToastr('Logged Out');
  }

}
