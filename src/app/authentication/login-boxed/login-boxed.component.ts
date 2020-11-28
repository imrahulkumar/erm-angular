import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login-boxed',
  templateUrl: './login-boxed.component.html',
  styles: []
})
export class LoginBoxedComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private api: ApiService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  loginSubmit(f) {
    console.log(f);
    this.login(f.value)
  }

  login(value) {
    this.api.post(`api/erm/user/login`, value).subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }

}
