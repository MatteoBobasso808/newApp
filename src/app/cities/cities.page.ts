import { Component, OnInit } from '@angular/core';
import {AlertController, IonicModule, ToastController} from "@ionic/angular";
import {Router, RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
  imports: [
    IonicModule,
    NgForOf,
    RouterLink
  ]
})
export class CitiesPage implements OnInit {

  token = localStorage.getItem("token");
  cities: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController) { }

  ngOnInit() {
    console.log("token: ", this.token)
    localStorage.removeItem("token"); // borrar algo en especifico del local storage
    // localStorage.clear() => limpiar por completo nuestro local storage
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

  async presentToast1(){
    const toast = await this.toastController.create({
      message: "Ciudad Seleccionada",
      duration: 1000,
      position: "bottom"
    });
    toast.present();
  }

  async presentAlert1(){
    const alert = await this.alertController.create({
      header: "Borrar ciudad",
      message: "¿Estas seguro que quieres borrar la ciudad?",
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log("No cancel")
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log("Eliminada")
          }
        }
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
