import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddteamPage } from '../addteam/addteam';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: '确认删除？',
      subTitle: '删除队伍后将不会出现在生成的赛事中!',
      buttons: ['取消','确认']
    });
    alert.present();
  }
  addTeam(): void {
    this.navCtrl.push(AddteamPage);

  }
}
