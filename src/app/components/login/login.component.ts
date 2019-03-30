import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public wrongForm: boolean = false;
  public messageWrong: string;
  public invalidEmail: boolean;
  public invalidPass: boolean;
  public userInDB: boolean;

  constructor(
    public _router: Router,
    public zone: NgZone,){}

  ngOnInit() {
  }

  
}
