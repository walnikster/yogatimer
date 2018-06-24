import { GroupProvider } from './../../providers/group/group'
import { Group } from './../../models/group'
import { Component, OnInit } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@IonicPage()
@Component({
  selector: 'page-edit-group',
  templateUrl: 'edit-group.html'
})
export class EditGroupPage implements OnInit {
  mode: string
  group: Group
  groupForm: FormGroup
  index: number

  ngOnInit(): void {
    this.mode = this.navParams.get('mode')
    if (this.mode == 'Edit') {
      this.group = this.navParams.get('group')
      this.index = this.navParams.get('index')
    }
    if (this.mode == 'New') {
      this.group = new Group(0, '', '', [])
    }
    this.initializeForm()
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private groupProvider: GroupProvider
  ) {}

  onSubmit() {
    const value = this.groupForm.value
    if (this.mode == 'Edit') {
      this.groupProvider.updateGroup(
        this.index,
        value.id,
        value.name,
        value.icon,
        []
      )
    } else {
      this.groupProvider.addGroup(value.id, value.name, value.icon, [])
    }
    this.groupForm.reset()
    this.navCtrl.popToRoot()
  }

  private initializeForm() {
    let id = null
    let name = null
    let icon = 'Medium'

    if (this.mode == 'Edit') {
      name = this.group.name
      icon = this.group.icon
      id = this.group.id
    }

    this.groupForm = new FormGroup({
      id: new FormControl(id, Validators.required),
      name: new FormControl(name, Validators.required),
      icon: new FormControl(icon, Validators.required)
    })
  }
}
