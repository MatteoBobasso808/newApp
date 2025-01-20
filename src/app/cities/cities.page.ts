import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
  imports: [
    IonicModule,
    NgForOf
  ]
})
export class CitiesPage implements OnInit {

  cities: any = [];

  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.getCities().subscribe(res=>{
      console.log("Res", res);
      this.cities = res;
    });
  }

  getCities(){
    return this.http
      .get("assets/files/cities.json")
      .pipe(
        map((res: any) =>{
          return res.data;
        })
      )
  }

}
