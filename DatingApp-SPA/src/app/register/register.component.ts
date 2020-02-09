import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrModule, Toastr, ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  model: any = {};
  constructor(private auth: AuthService, private toaster: ToastrManager) { }

  ngOnInit() {
  }


  register() {
    this.auth.register(this.model).subscribe(() => {
      this.toaster.successToastr('Register Successfull');
    },
      error => {
        this.toaster.errorToastr(error);
      }
    );

    console.log(this.model);
  }


  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
