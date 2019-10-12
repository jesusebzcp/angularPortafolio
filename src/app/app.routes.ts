import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from '../app/components/quien-soy/quien-soy.component';
import { LogrosComponent } from './components/logros/logros.component';
import { BlogComponent } from './components/blog/blog.component';




export const ROUTES : Routes =[
    {path: 'home', component: HomeComponent},
    {path: 'quiensoy', component: QuienSoyComponent},
    {path: 'logros', component: LogrosComponent},
    {path: 'blog', component: BlogComponent},
 
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }

]
