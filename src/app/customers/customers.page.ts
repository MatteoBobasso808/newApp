import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
    selector: 'app-customers',
    templateUrl: './customers.page.html',
    styleUrls: ['./customers.page.scss'],
    imports: [
        IonicModule
    ]
})
export class CustomersPage implements OnInit {

    constructor(private router: Router){}

  ngOnInit() {
  }

  goToHome(){
      this.router.navigate(['/home'])
  }

}
