import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonicModule
  ]
})
export class LoginPage implements OnInit {

  token = "ftsbs4596dopka0367gdkspl"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    localStorage.setItem("token", this.token);
    this.router.navigate(["/home"]);
  }

}
