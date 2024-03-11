import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './pages/client/client.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { PackageActivationComponent } from './pages/package-activation/package-activation.component';
import { UsersComponent } from './pages/users/users.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ClientAdminDashboardComponent } from './pages/client-admin-dashboard/client-admin-dashboard.component';
import { ClientUserDashboardComponent } from './pages/client-user-dashboard/client-user-dashboard.component';
import { ClientLayoutComponent } from './pages/client-layout/client-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { UserLayoutComponent } from './pages/user-layout/user-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { BookingComponent } from './pages/booking/booking.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalenderComponent } from './pages/calender/calender.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    PackagesComponent,
    PackageActivationComponent,
    UsersComponent,
    ClientAdminDashboardComponent,
    ClientUserDashboardComponent,
    ClientLayoutComponent,
    HomeComponent,
    RoomsComponent,
    UserLayoutComponent,
    LoginComponent,
    AdminDashboardComponent,
    BookingComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule, 
    NgbAlertModule,
    NgbModule,
    FullCalendarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
