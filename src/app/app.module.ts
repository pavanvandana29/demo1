import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './commoncomponent/navbar/navbar.component';
import { FooterComponent } from './commoncomponent/footer/footer.component';
import { IphoneComponent } from './navigratingcomponent/iphone/iphone.component';
import { AndroidComponent } from './navigratingcomponent/android/android.component';
import { HelpComponent } from './navigratingcomponent/help/help.component';
import { CompanyComponent } from './navigratingcomponent/company/company.component';
import { SigninComponent } from './navigratingcomponent/signin/signin.component';
import { BannerComponent } from './welcome/banner/banner.component';
import { AndroidUserComponent } from './welcome/android-user/android-user.component';
import { MobileSecurityComponent } from './welcome/mobile-security/mobile-security.component';
import { SpywareComponent } from './welcome/spyware/spyware.component';
import { HelpCenterComponent } from './welcome/help-center/help-center.component';
import { SpyingOnYourPhoneComponent } from './welcome/spying-on-your-phone/spying-on-your-phone.component';
import { LatestInsightsComponent } from './welcome/latest-insights/latest-insights.component';
import { SocialMediaComponent } from './welcome/social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    NavbarComponent,
    FooterComponent,
    IphoneComponent,
    AndroidComponent,
    HelpComponent,
    CompanyComponent,
    SigninComponent,
    BannerComponent,
    AndroidUserComponent,
    MobileSecurityComponent,
    SpywareComponent,
    HelpCenterComponent,
    SpyingOnYourPhoneComponent,
    LatestInsightsComponent,
    SocialMediaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
