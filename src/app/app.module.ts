import { EditGroupPage } from './../pages/edit-group/edit-group'
import { SettingsPage } from './../pages/settings/settings'
import { TabsPage } from './../pages/tabs/tabs'
import { GroupPage } from './../pages/group/group'
import { GroupsPage } from './../pages/groups/groups'
import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'

import { MyApp } from './app.component'
import { HomePage } from '../pages/home/home'
import { TimerPage } from '../pages/timer/timer'
import { GroupProvider } from '../providers/group/group'
import { IonicStorageModule } from '@ionic/storage'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    GroupsPage,
    GroupPage,
    SettingsPage,
    TimerPage,
    EditGroupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GroupsPage,
    GroupPage,
    TimerPage,
    TabsPage,
    SettingsPage,
    EditGroupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GroupProvider
  ]
})
export class AppModule {}
