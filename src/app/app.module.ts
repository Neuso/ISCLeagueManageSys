import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { AddteamPage } from '../pages/addteam/addteam';
import { LoginPage } from '../pages/login/login';
import { RecordPage } from '../pages/record/record';
import { PersoncenterPage } from '../pages/personcenter/personcenter';
import { RankPage } from '../pages/rank/rank';
import { RegisterPage } from '../pages/register/register';
import { MatchPage } from '../pages/match/match';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    AddteamPage,
    LoginPage,
    RecordPage,
    PersoncenterPage,
    RankPage,
    RegisterPage,
    MatchPage,
        
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    AddteamPage,
    LoginPage,
    RecordPage,
    PersoncenterPage,
    RankPage,
    RegisterPage,
    MatchPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
