import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-customers',
    templateUrl: './customers.page.html',
    styleUrls: ['./customers.page.scss'],
    imports: [
        IonicModule
    ]
})
export class CustomersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
