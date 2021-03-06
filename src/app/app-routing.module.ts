import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './_guards/auth.guard';
import { BookingsComponent } from './bookings/bookings.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ScopeGuard } from './_guards/scope.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  { 
    path: '', 
    component: CalendarComponent,
    data: {
      title: 'Home',
      metatags: {
        desciption: 'SAC Room Booking Portal',
        keywords: 'sac, booking, iitb'
      }
    }
  
  },
  { 
    path: 'login', 
    component: LoginComponent,
    data: {
      title: 'Login',
      metatags: {
        desciption: 'SAC Room Booking Portal',
        keywords: 'sac, booking, iitb'
      }
    } 
  },
  { 
    path: 'bookings', 
    component: BookingsComponent, 
    canActivate: [AuthGuard],
    data: {
      title: 'Bookings',
      metatags: {
        desciption: 'SAC Room Booking Portal',
        keywords: 'sac, booking, iitb'
      }
    }
  },
  {
    path: 'rooms',
    component: RoomsComponent,
    canActivate: [ScopeGuard],
    data: {
      expectedRole: 'admin',
      title: 'Rooms',
      metatags: {
        desciption: 'SAC Room Booking Portal',
        keywords: 'sac, booking, iitb'
      }
    }
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [ScopeGuard],
    data: {
      expectedRole: 'admin',
      title: 'Admin Panel',
      metatags: {
        desciption: 'SAC Room Booking Portal',
        keywords: 'sac, booking, iitb'
      }
    }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
