import { Component } from "@angular/core"
import { NavController } from "ionic-angular"
import { Observable } from "rxjs"
import { takeWhile, tap } from "rxjs/operators"
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  currentval: number
  started: boolean
  stopped: boolean
  timer = Observable.timer(0, 5)

  constructor(public navCtrl: NavController) {
    this.currentval = 0.0
  }

  onStart() {
    this.started = true
    this.stopped = false
    this.timer
      .pipe(takeWhile(_ => !this.stopped), tap(i => (this.currentval += 0.005)))
      .subscribe()
  }

  onStop() {
    this.stopped = true
  }

  onResume() {
    this.onStart()
  }

  onSave() {
    this.started = false
    this.stopped = true
    this.currentval = 0.0
  }
}
