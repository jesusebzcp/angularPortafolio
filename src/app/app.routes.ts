import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from '../app/components/quien-soy/quien-soy.component';
import { LogrosComponent } from './components/logros/logros.component';
import { BlogComponent } from './components/blog/blog.component';
import { WebappComponent } from './components/webapp/webapp.component';
import { Webapp2Component } from './components/webapp2/webapp2.component';
import { Webapp3Component } from './components/webapp3/webapp3.component';
import { Webapp4Component } from './components/webapp4/webapp4.component';
import { Webapp5Component } from './components/webapp5/webapp5.component';
import { Webapp6Component } from './components/webapp6/webapp6.component';






export const ROUTES : Routes =[
    {path: 'home', component: HomeComponent},
    {path: 'quiensoy', component: QuienSoyComponent},
    {path: 'logros', component: LogrosComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'webapp', component: WebappComponent},
    {path: 'webapp2', component: Webapp2Component},
    {path: 'webapp3', component: Webapp3Component},
    {path: 'webapp4', component: Webapp4Component},
    {path: 'webapp5', component: Webapp5Component},
    {path: 'webapp6', component: Webapp6Component},

  
  
 
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }

]
