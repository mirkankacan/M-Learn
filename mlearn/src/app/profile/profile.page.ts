import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController, MenuController, NavParams } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
profile=null;
username:string;
  constructor(
        private avatarService:AvatarService,
    private authService:AuthService,
    private router:Router,
    private loadingController:LoadingController,
    private alertController:AlertController,
    private menu:MenuController,
    private route:ActivatedRoute
  ) {
 
    this.avatarService.getUserProfile().subscribe((data)=>{
      this.profile=data;

      
    }) 
  }

  ngOnInit() {
    
  }

  async changeImage(){
      const image=await Camera.getPhoto({
        quality:90,
        allowEditing:false,
        resultType:CameraResultType.Base64,
        source:CameraSource.Photos, // cam,photos or prompt
      })
      console.log(image);
      
      if(image){
        const loading = await this.loadingController.create();
        await loading.present();
        const result=await this.avatarService.uploadImage(image);
        loading.dismiss();

        if(!result){
          const alert=await this.alertController.create({
            header:'Upload failed.',
            message:'There was a problem uploading your avatar!',
            buttons:['OK'],
          })
          await alert.present();
        }
      }
}
//image

async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})
}

}
