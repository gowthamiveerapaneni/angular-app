import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username='gowthami'
password=''
errorMsg='invalid credentials'
validateCredentials=false
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  validatelogin(){
    console.log(this.username);
    if(this.username==="gowthami"&&this.password==="dummy"){
      this.validateCredentials=false;
      this.router.navigate(['welcome',this.username])
    }else{
      this.validateCredentials=true;
    }
  }

}
