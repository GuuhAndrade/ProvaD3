import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

var config = {firebaseConfig = {
  apiKey: "AIzaSyAbZWgtGr3RPQ7gXfS8dZ2-2MwfrZFTy1c",
  authDomain: "provad3-113ec.firebaseapp.com",
  databaseURL: "https://provad3-113ec.firebaseio.com",
  projectId: "provad3-113ec",
  storageBucket: "provad3-113ec.appspot.com",
  messagingSenderId: "518200078767",
  appId: "1:518200078767:web:faf2cea43ae0bbf8fe3f5a",
  measurementId: "G-FKZM400M20"};




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
