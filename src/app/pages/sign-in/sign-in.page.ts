import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
isSubmit:boolean = false;
loginForm:FormGroup = new FormGroup({});
  constructor() { }
  ngOnInit() {
    this.initForm
  }

  initForm(){
    this.loginForm =new FormGroup({
      phone_no :new FormControl('',[Validators.required,Validators.pattern("^[0-9]{10}$")])
    })
  }

  onsubmit(){
 
  }

  displayotp(){

  }

  signup(){
    
  }

}
