import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable()
export class GroupProvider {
  constructor(public http: HttpClient) {}
}
