import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public email: string;
  public password: string;
  public name: string;
  public validEmail: boolean;
  public validPass: boolean;
  public validName: boolean;
  public wrongForm: boolean;
  public messageWrong: string;
  public userInDB: boolean;

  constructor(

  ) { }

  ngOnInit() {
    
  }

  
}
