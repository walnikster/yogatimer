import { EditGroupPage } from './../edit-group/edit-group'
import { GroupPage } from './../group/group'
import { Group } from './../../models/group'
import { GroupProvider } from './../../providers/group/group'
import { Component, OnInit } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private groupProvider: GroupProvider
  ) {}

  private groups: Group[]

  ngOnInit() {}

  ionViewDidEnter() {
    this.groupProvider.getGroups().subscribe(grps => (this.groups = grps))
  }

  onNewTimergroup() {
    this.navCtrl.push(EditGroupPage, { mode: 'New' })
  }

  onLoadTimergroup(group: Group, index: number) {
    this.navCtrl.push(GroupPage, { group: group, index: index })
  }
}
