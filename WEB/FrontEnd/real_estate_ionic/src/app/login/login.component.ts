import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService, Token } from '../login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  postForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  token = new Token();


  constructor(private LoginService: LoginService, private router: Router, private http: HttpClient) { }


  login(){
    console.log(this.postForm.value);
    this.LoginService.getToken(this.postForm.value ).subscribe(res => {
      console.log(res);
      this.token = res.token;
      localStorage.setItem('token', res.token)
      this.router.navigate(['/appartement']);
      }
    )

    
    
  }


}
