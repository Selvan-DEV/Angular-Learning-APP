import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { MaterialModule } from './material/material.module';
import { EmpRegisterComponent } from './Components/emp-register/emp-register.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EmpListComponent } from './Components/emp-list/emp-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HostDirective } from './ui-tools/host.directive';
import { MemberComponent } from './dynamic-components/member/member.component';
import { TestComponent } from './dynamic-components/test/test.component';
import { SelvanComponent } from './dynamic-components/member/selvan/selvan.component';
import { ManiComponent } from './dynamic-components/member/mani/mani.component';
import { MemberoneComponent } from './dynamic-components/member/memberone/memberone.component';
import { MembertwoComponent } from './dynamic-components/member/membertwo/membertwo.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpRegisterComponent,
    ToolbarComponent,
    EmpListComponent,
    HostDirective,
    MemberComponent,
    TestComponent,
    SelvanComponent,
    ManiComponent,
    MemberoneComponent,
    MembertwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFirestoreModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MaterialModule
  ],
  entryComponents: [
    MemberoneComponent,
    MembertwoComponent
  ],
  exports: [
    ToolbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
