import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IphoneComponent } from './navigratingcomponent/iphone/iphone.component';
import { AndroidComponent } from './navigratingcomponent/android/android.component';
import { HelpComponent } from './navigratingcomponent/help/help.component';
import { CompanyComponent } from './navigratingcomponent/company/company.component';
import { SigninComponent } from './navigratingcomponent/signin/signin.component'; 
const routes: Routes = [
  {path: '',component:WelcomeComponent},
  {path:'iphone',component:IphoneComponent},
  {path:'android',component:AndroidComponent},
  {path:'help',component:HelpComponent},
  {path:'company',component:CompanyComponent},
  {path:'signin',component:SigninComponent},
  {path: '**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
