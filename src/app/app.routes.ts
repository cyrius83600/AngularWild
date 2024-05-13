import { Routes } from '@angular/router';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    {
        path:'menu',component:MenuComponent,
    },
    {
        path:'signup',component:SignUpComponent
   },
   {
        path:'user',component:UserProfileComponent
   },
   {
        path:'**',component:UserProfileComponent
   }
    

    
];
