import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimerEditPage } from './timer-edit';

@NgModule({
  declarations: [
    TimerEditPage,
  ],
  imports: [
    IonicPageModule.forChild(TimerEditPage),
  ],
})
export class TimerEditPageModule {}
