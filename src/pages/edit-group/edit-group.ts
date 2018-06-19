import { Group } from "./../../models/group"
import { Component, OnInit } from "@angular/core"
import { IonicPage, NavController, NavParams } from "ionic-angular"

@IonicPage()
@Component({
  selector: "page-edit-group",
  templateUrl: "edit-group.html"
})
export class EditGroupPage implements OnInit {
  ngOnInit(): void {
    this.group = this.navParams.get("group")
    this.mode = this.navParams.get("mode")
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  mode: string
  group: Group
  ionViewDidLoad() {
    console.log("ionViewDidLoad EditGroupPage")
  }
}
