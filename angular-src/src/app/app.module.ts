import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { ValidateService } from './services/validate.service';
// import { AuthService } from './services/auth.service';
// import { AuthGuard } from './guards/auth.guard';
import { WorkComponent } from './components/work/work.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ServicesComponent } from './components/services/services.component';
import { ApproachComponent } from './components/approach/approach.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { BlogComponent } from './components/blog/blog.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { EstimateComponent } from './components/estimate/estimate.component';
import { MobileNavigationComponent } from './components/mobile-navigation/mobile-navigation.component';
import { EstimateCompleteComponent } from './components/estimate/estimate-complete/estimate-complete.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { JourneyComponent } from './components/journey/journey.component';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent
  // , canActivate: [AuthGuard]
  },
  { path: 'profile', component: ProfileComponent
  // , canActivate: [AuthGuard]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'estimate', component: EstimateComponent },
  { path: 'work', component: WorkComponent },
  { path: 'work/:id', component: CaseStudyComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'register', redirectTo: 'login' },
  { path: 'journey', component: JourneyComponent },
  { path: 'estimate/success', component: SuccessModalComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // LoginComponent,
    // RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    WorkComponent,
    TestimonialsComponent,
    ServicesComponent,
    ApproachComponent,
    TechnologyComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    CallToActionComponent,
    BlogComponent,
    CaseStudyComponent,
    EstimateComponent,
    MobileNavigationComponent,
    EstimateCompleteComponent,
    ProgressBarComponent,
    JourneyComponent,
    SuccessModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' })
  ],
  providers: [
    ValidateService,
    // AuthService,
    // AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
