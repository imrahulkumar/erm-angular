import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-register-boxed',
  templateUrl: './register-boxed.component.html',
  styles: []
})
export class RegisterBoxedComponent implements OnInit {


  registerForm: FormGroup;

  constructor(private api: ApiService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.registerForm = new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      dob: new FormControl(''),
      companyName: new FormControl(''),
      address: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl('superAdmin'),
    })
  }

  registerFormSubmit(f) {
    debugger
    this.register(f.value)
  }

  register(value) {
    this.api.post(`api/erm/user/signup`, value).subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }

}
