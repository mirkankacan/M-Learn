import { Component, Input, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  credentials:FormGroup;

  constructor(
      private fb:FormBuilder,
      private loadingController:LoadingController,
      private alertController:AlertController,
      private authService:AuthService,
      private router:Router,
    ) { }
  
     get email(){
       return this.credentials.get('email');
     }
     get password(){
       return this.credentials.get('password');
     }
     get repassword(){
       return this.credentials.get('repassword');
     }
  
    ngOnInit() {
      this.credentials=this.fb.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(6)]],
        repassword:['',[Validators.required,Validators.minLength(6)]]
      })
    }

async showAlert(header,message){
  const alert=await this.alertController.create({
    header,
    message,
    buttons:['OK'],
  });
  await alert.present();
}

  async register(){
    const loading=await this.loadingController.create();
    await loading.present();

    const user=await this.authService.register(this.credentials.value);
    await loading.dismiss();

    if(user){
      this.router.navigateByUrl('/login',{replaceUrl:true});
    }
    else{
      this.showAlert('Registration failed!','Please try again.');
    }
  }

  goLogin(){
    this.router.navigateByUrl('/login',{replaceUrl:true});
  }

}

