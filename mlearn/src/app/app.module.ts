import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { getApp, initializeApp } from 'firebase/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideFirebaseApp } from '@angular/fire/app';
import { Capacitor } from '@capacitor/core';
import {initializeAuth, indexedDBLocalPersistence} from 'firebase/auth';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
     AppRoutingModule, 
     provideAuth(() => {
       if(Capacitor.isNativePlatform()){
            return initializeAuth(getApp(),{
              persistence:indexedDBLocalPersistence,
            });
       }
       else{
         return getAuth();
       }
     }),
      provideFirestore(() => getFirestore()),
       provideStorage(() => getStorage())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
