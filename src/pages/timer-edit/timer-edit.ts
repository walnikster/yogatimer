import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-timer-edit',
  templateUrl: 'timer-edit.html'
})
export class TimerEditPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerEditPage')
  }
}
