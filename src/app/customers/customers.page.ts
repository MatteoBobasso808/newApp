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
  searchedUser: any;

  permission: boolean = true;

  constructor(
    private router: Router,
    private http: HttpClient){}

  ngOnInit() {
    this.permission = true;
    this.getCustomers().subscribe(res=>{
      console.log("Res", res);
      this.users = res;
      this.searchedUser = this.users;
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

  searchCustomer(event: Event){
    const input = event.target as HTMLInputElement;
    const text = input.value;
    this.searchedUser = this.users;
    if(text && text.trim() != ''){
      this.searchedUser = this.searchedUser.filter((user: any) => {
        return (user.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }

}
