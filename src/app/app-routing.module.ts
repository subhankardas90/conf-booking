import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesComponent } from './pages/packages/packages.component';
import { ClientComponent } from './pages/client/client.component';
import { PackageActivationComponent } from './pages/package-activation/package-activation.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientLayoutComponent } from './pages/client-layout/client-layout.component';
import { UserLayoutComponent } from './pages/user-layout/user-layout.component';
import { ClientAdminDashboardComponent } from './pages/client-admin-dashboard/client-admin-dashboard.component';
import { ClientUserDashboardComponent } from './pages/client-user-dashboard/client-user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { BookingComponent } from './pages/booking/booking.component';

const routes1: Routes = [
  {path:'', component: LoginComponent},
  {path:"", component: HomeComponent, 
    children:[
    {
      path:"packages",
      component: PackagesComponent
    },
    {
        path:"client",
        component: ClientComponent
    },
    {
        path:"activate",
        component: PackageActivationComponent
    },
    {
        path:"users",
        component: UsersComponent
    },{
      path:"admin-dashboard",
      component: AdminDashboardComponent
    }
  ]
  },
  {path:"", component: ClientLayoutComponent, 
    children:[
    {
      path:"client-dashboard",
      component: ClientAdminDashboardComponent
    },
    {
        path:"rooms",
        component: RoomsComponent
    },
    {
        path:"client-users",
        component: UsersComponent
    },
    {
      path:"booking",
      component: BookingComponent
  }
  ]
  },
  {path:"", component: UserLayoutComponent, 
    children:[
    {
      path:"user-dashboard",
      component: ClientUserDashboardComponent
    },
    {
        path:"client",
        component: ClientComponent
    },
    {
        path:"activate",
        component: PackageActivationComponent
    },
    {
        path:"users",
        component: UsersComponent
    }
  ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes1)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
