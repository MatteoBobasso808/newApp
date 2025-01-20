import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-customers',
    templateUrl: './customers.page.html',
    styleUrls: ['./customers.page.scss'],
  imports: [
    IonicModule,
    NgForOf
  ]
})
export class CustomersPage implements OnInit {

  users: any = [];

  permission: boolean = true;

  constructor(
    private router: Router,
    private http: HttpClient){}

  ngOnInit() {
    this.permission = true;
    this.getCustomers().subscribe(res=>{
      console.log("Res", res);
      this.users = res;
    });
  }

  goToHome(){
      this.router.navigate(['/home'])
  }

  getCustomers(){
      return this.http
        .get("assets/files/customers.json")
        .pipe(
          map((res: any) =>{
            return res.data;
          })
        )
  }

}
