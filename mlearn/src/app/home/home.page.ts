import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(
    
    private authService:AuthService,
    private router:Router,
    private loadingController:LoadingController,
    private alertController:AlertController,
    private menu:MenuController
    
  ) { }

async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})
}


}
