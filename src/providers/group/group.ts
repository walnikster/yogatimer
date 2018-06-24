import { Observable } from 'rxjs'
import { Timer } from './../../models/timer'
import { Injectable } from '@angular/core'
import { Group } from '../../models/group'
import { Storage } from '@ionic/storage'
@Injectable()
export class GroupProvider {
  constructor(private storage: Storage) {}

  private groups: Group[] = []

  addGroup(id: number, name: string, icon: string, timers: Timer[]) {
    this.groups.push(new Group(id, name, icon, timers))
    this.storeGroups()
  }
  getGroups(): Observable<Group[]> {
    return Observable.from(this.fetchGroups())
  }

  updateGroup(
    index: number,
    id: number,
    name: string,
    icon: string,
    timers: Timer[]
  ) {
    this.groups[index] = new Group(id, name, icon, timers)
    this.storeGroups()
  }

  removeGroup(index: number) {
    this.groups.splice(index, 1)
    this.storeGroups()
  }

  private storeGroups() {
    this.storage
      .set('GROUPS', this.groups)
      .then()
      .catch(err => console.log(err))
  }
  private fetchGroups() {
    return this.storage
      .get('GROUPS')
      .then(grps => {
        if (grps) {
          this.groups = grps.slice()
        } else {
          this.groups = []
        }
        return this.groups
      })
      .catch(err => {
        console.log(err)
        return []
      })
  }
}
;[]
