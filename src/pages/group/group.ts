import { EditGroupPage } from "./../edit-group/edit-group"
import { Group } from "./../../models/group"
import { Component } from "@angular/core"
import { IonicPage, NavController, NavParams } from "ionic-angular"

@IonicPage()
@Component({
  selector: "page-group",
  templateUrl: "group.html"
})
export class GroupPage {
  group: Group
  index: number

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit() {
    this.group = this.navParams.get("group")
    this.index = this.navParams.get("index")
  }

  onEditGroup() {
    this.navCtrl.push(EditGroupPage, {
      mode: "Edit",
      group: this.group,
      index: this.index
    })
  }

  onDeleteGroup() {
    this.navCtrl.popToRoot()
  }
}
