import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
  imports: [
    IonicModule,
    NgForOf
  ]
})
export class CityPage implements OnInit {

  id: any;
  finalId: number = 0;
  cities: any = [];
  name!: string;
  image!: string;
  description!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.finalId = this.id - 1;

    this.getCities().subscribe(res=>{
      console.log("Res", res);
      this.cities = res;
      this.name = this.cities[this.finalId].name;
      this.image = this.cities[this.finalId].image;
      this.description = this.cities[this.finalId].description;
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
