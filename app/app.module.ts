import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './component/appheader/appheader.component';
import { AppfooterComponent } from './component/appfooter/appfooter.component';
import { AppmenuComponent } from './component/appmenu/appmenu.component';
import { AppsettingComponent } from './component/appsetting/appsetting.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
