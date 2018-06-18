import { GroupsPage } from "./../groups/groups"
import { HomePage } from "./../home/home"
import { Component } from "@angular/core"
import { NavController } from "ionic-angular"

@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  homeRoot = HomePage
  groupsRoot = GroupsPage

  constructor(public navCtrl: NavController) {}
}
