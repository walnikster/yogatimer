import { Component } from "@angular/core"
import { IonicPage, NavController, NavParams } from "ionic-angular"

@IonicPage()
@Component({
  selector: "page-edit-group",
  templateUrl: "edit-group.html"
})
export class EditGroupPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad EditGroupPage")
  }
}
