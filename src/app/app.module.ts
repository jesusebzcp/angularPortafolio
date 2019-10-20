import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router
import {RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { LogrosComponent } from './components/logros/logros.component';
import { BlogComponent } from './components/blog/blog.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { WebappComponent } from './components/webapp/webapp.component';

//servicio

import { Webapp2Component } from './components/webapp2/webapp2.component';
import { Webapp3Component } from './components/webapp3/webapp3.component';
import { Webapp4Component } from './components/webapp4/webapp4.component';
import { Webapp5Component } from './components/webapp5/webapp5.component';
import { Webapp6Component } from './components/webapp6/webapp6.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienSoyComponent,
    LogrosComponent,
    BlogComponent,
    NavbarComponent,
    FooterComponent,
    FormularioComponent,
    WebappComponent,
    Webapp2Component,
    Webapp3Component,
    Webapp4Component,
    Webapp5Component,
    Webapp6Component,
 

   

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
