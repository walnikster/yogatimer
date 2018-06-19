import { Timer } from "./../../models/timer"
import { Group } from "./../../models/group"
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable"

@Injectable()
export class GroupsProvider {
  timers: Timer[]
  constructor(public http: HttpClient) {}

  public getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(
      "https://5b1ab06c83b6190014ca3af7.mockapi.io/groups"
    )
  }
}
