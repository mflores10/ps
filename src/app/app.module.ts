import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AsidecontrolComponent } from './shared/asidecontrol/asidecontrol.component';
import { AsidemenuComponent } from './shared/asidemenu/asidemenu.component';
import { TestmainComponent } from './pages/testmain/testmain.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsidecontrolComponent,
    AsidemenuComponent,
    TestmainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
