import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskManegmantComponent } from './task-manegmant/task-manegmant.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '',  component: TaskManegmantComponent },
  { path: 'about', component: AboutComponent },
  { path: 'taskMangment', component: TaskManegmantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
