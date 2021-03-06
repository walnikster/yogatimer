import { TimerEditPage } from './../timer-edit/timer-edit'
import { GroupProvider } from './../../providers/group/group'
import { EditGroupPage } from './../edit-group/edit-group'
import { Group } from './../../models/group'
import { Component, OnInit } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { reorderArray } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage implements OnInit {
  group: Group
  index: number

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private groupProvider: GroupProvider
  ) {}

  ngOnInit() {
    this.group = this.navParams.get('group')
    this.index = this.navParams.get('index')
  }

  onEditTimergroup() {
    this.navCtrl.push(EditGroupPage, {
      mode: 'Edit',
      group: this.group,
      index: this.index
    })
  }

  onDeleteTimergroup() {
    this.groupProvider.removeGroup(this.index)
    this.navCtrl.popToRoot()
  }

  onNewTimer() {
    this.navCtrl.push(TimerEditPage, {
      mode: 'New',
      index: this.index,
      group: this.group
    })
  }

  reorderItems(indexes) {
    this.group.timers = reorderArray(this.group.timers, indexes)
  }
}
