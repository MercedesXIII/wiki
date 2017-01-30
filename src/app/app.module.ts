import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { routing } from './app.routing';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { HeaderComponent } from './shared/header/header.component';
import { AppComponent
  ,HomeComponent
  ,HeaderComponent
  ,ListPageComponent
  ,PageService} from './';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { EditdataComponent } from './pages/list-page/editdata/editdata.component';
import { CreateComponent } from './pages/list-page/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListPageComponent,
    AboutusComponent,
    EditdataComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Bs3ModalModule,
    routing
  ],
  providers: [
    PageService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
