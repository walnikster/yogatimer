import { Group } from "./../../models/group"
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable"

@Injectable()
export class GroupsProvider {
  constructor(public http: HttpClient) {
    console.log("Hello GroupsProvider Provider")
  }

  public getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(
      "https://5b1ab06c83b6190014ca3af7.mockapi.io/groups"
    )
  }
}
