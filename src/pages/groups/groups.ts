import { Timer } from "./../../models/timer"
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
  timers: Timer[]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private groupsProvider: GroupsProvider
  ) {
    this.timers = []
    this.timers[0] = {
      id: 6,
      isRunning: false,
      isRecording: false,
      name: "tmer 1",
      duration: 5000
    }
    this.timers[1] = {
      id: 6,
      isRunning: false,
      isRecording: false,
      name: "tmer 2",
      duration: 5500
    }
    this.timers[2] = {
      id: 16,
      isRunning: false,
      isRecording: false,
      name: "tmer 3",
      duration: 4000
    }
  }

  private groups: Group[]

  ionViewDidLoad() {
    this.groupsProvider.getGroups().subscribe(grps => {
      this.groups = grps
      this.groups.forEach(x => {
        x.timers = this.timers.slice(0)
      })
    })
  }

  onNewTimergroup() {
    this.navCtrl.push(EditGroupPage, { mode: "New" })
  }

  onLoadTimergroup(group: Group, index: number) {
    this.navCtrl.push(GroupPage, { group: group, index: index })
  }
}
