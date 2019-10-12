import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router
import {RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { LogrosComponent } from './components/logros/logros.component';
import { BlogComponent } from './components/blog/blog.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienSoyComponent,
    LogrosComponent,
    BlogComponent,
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
