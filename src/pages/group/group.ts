import { EditGroupPage } from "./../edit-group/edit-group"
import { Group } from "./../../models/group"
import { Component, OnInit } from "@angular/core"
import { IonicPage, NavController, NavParams } from "ionic-angular"
import { reorderArray } from "ionic-angular"

@IonicPage()
@Component({
  selector: "page-group",
  templateUrl: "group.html"
})
export class GroupPage implements OnInit {
  group: Group
  index: number

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit() {
    this.group = this.navParams.get("group")
    this.index = this.navParams.get("index")
  }

  onEditTimergroup() {
    this.navCtrl.push(EditGroupPage, {
      mode: "Edit",
      group: this.group,
      index: this.index
    })
  }

  onDeleteTimergroup() {
    this.navCtrl.popToRoot()
  }

  reorderItems(indexes) {
    this.group.timers = reorderArray(this.group.timers, indexes)
  }
}
