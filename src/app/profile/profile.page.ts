import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
isSubmit: any;
loginForm: any;
button: any;
login: any;
logout: any;

  constructor() { }

  ngOnInit() {
  }

}
