import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@module/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:()=>import ( `./module/auth/auth.module`).then(m=>m.AuthModule)
    } ,
    {
  path: '',
  component: HomePageComponent,
  loadChildren:()=>import ( `./module/home/home.module`).then(m=>m.HomeModule)
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
