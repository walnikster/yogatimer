import { EditGroupPage } from "./../edit-group/edit-group"
import { GroupPage } from "./../group/group"
import { Group } from "./../../models/group"
import { GroupsProvider } from "./../../providers/groups/groups"
import { Component } from "@angular/core"
import { IonicPage, NavController, NavParams } from "ionic-angular"

@IonicPage()
@Component({
  selector: "page-groups",
  templateUrl: "groups.html"
})
export class GroupsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private groupsProvider: GroupsProvider
  ) {}

  private groups: Group[]

  ionViewDidLoad() {
    this.groupsProvider.getGroups().subscribe(grps => {
      this.groups = grps
    })
  }

  onNewTimergroup() {
    this.navCtrl.push(EditGroupPage, { mode: "New" })
  }

  onLoadTimergroup(group: Group, index: number) {
    this.navCtrl.push(GroupPage, { group: group, index: index })
  }
}
