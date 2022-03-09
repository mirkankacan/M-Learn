import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController, MenuController, NavParams } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';
import { HttpClient } from '@angular/common/http';

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

    private http:HttpClient
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
        const data=new FormData();
        data.append('file',image[0]);
        data.append('UPLOADCARE_STORE','1');
        data.append('UPLOADCARE_PUB_KEY','e8d70db5e2bdfc77e9e5');
        this.http.post('https://upload.uploadcare.com/base/',data).subscribe(event=>{console.log(event)});
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
